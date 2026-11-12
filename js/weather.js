(function () {
    'use strict';

    var WEATHER_API_URL =
        'https://api.open-meteo.com/v1/forecast' +
        '?latitude=53.63&longitude=55.95' +
        '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure' +
        '&daily=weather_code,temperature_2m_max,temperature_2m_min' +
        '&wind_speed_unit=ms' +
        '&timezone=Europe%2FYekaterinburg' +
        '&forecast_days=5';

    function getSeasonalFallback() {
        var now = new Date();
        var month = now.getMonth();
        var base = { temp: 3, feels: -1, wind: 4, humidity: 74, pressure: 752, code: 2 };

        if (month === 11 || month <= 1) {
            base = { temp: -9, feels: -14, wind: 4, humidity: 80, pressure: 758, code: 71 };
        } else if (month >= 2 && month <= 4) {
            base = { temp: 7, feels: 4, wind: 4, humidity: 68, pressure: 750, code: 2 };
        } else if (month >= 5 && month <= 7) {
            base = { temp: 22, feels: 22, wind: 3, humidity: 58, pressure: 748, code: 1 };
        }

        var daily = [];
        var offsets = [0, 1, -1, 2, 1];
        var codes = [base.code, 1, base.code, 2, 0];

        for (var i = 0; i < 5; i += 1) {
            var dayDate = new Date(now.getTime() + i * 86400000);
            var yyyy = dayDate.getFullYear();
            var mm = String(dayDate.getMonth() + 1).padStart(2, '0');
            var dd = String(dayDate.getDate()).padStart(2, '0');
            var dayMax = base.temp + offsets[i];

            daily.push({
                dateStr: yyyy + '-' + mm + '-' + dd,
                code: codes[i],
                max: dayMax,
                min: dayMax - 6
            });
        }

        base.daily = daily;
        return base;
    }

    function describeWeatherCode(code) {
        if (code === 0) return { icon: '☀️', text: 'Ясно', theme: 'weather-theme-sunny' };
        if (code === 1) return { icon: '🌤️', text: 'Малооблачно', theme: 'weather-theme-sunny' };
        if (code === 2) return { icon: '⛅', text: 'Переменная облачность', theme: 'weather-theme-cloudy' };
        if (code === 3) return { icon: '☁️', text: 'Пасмурно', theme: 'weather-theme-cloudy' };
        if (code === 45 || code === 48) return { icon: '🌫️', text: 'Туман', theme: 'weather-theme-cloudy' };
        if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
            return { icon: '🌧️', text: 'Дождь', theme: 'weather-theme-rain' };
        }
        if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
            return { icon: '❄️', text: 'Снег', theme: 'weather-theme-snow' };
        }
        if (code >= 95) return { icon: '⛈️', text: 'Гроза', theme: 'weather-theme-rain' };
        return { icon: '🌤️', text: 'Спокойная погода', theme: 'weather-theme-cloudy' };
    }

    function getTouristTip(temp, code) {
        var isRainOrStorm = (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95;
        var isSnow = (code >= 71 && code <= 77) || code === 85 || code === 86;

        if (isRainOrStorm) {
            return 'На улице осадки — отличный повод заглянуть в Историко-краеведческий музей или Русский драмтеатр.';
        }
        if (isSnow || temp <= -10) {
            return 'Морозно: одевайтесь теплее и загляните погреться в кофейни исторического центра.';
        }
        if (temp >= 18 && code <= 2) {
            return 'Отличная погода для поездки на шиханы Торатау и Куштау или прогулки по набережной Ашкадара!';
        }
        if (temp >= 5) {
            return 'Комфортная погода для пешего маршрута по купеческому центру и улице Карла Маркса.';
        }
        return 'Прохладно — возьмите ветровку или тёплый шарф для прогулки по открытым смотровым площадкам.';
    }

    function formatTemp(value) {
        var rounded = Math.round(value);
        return (rounded > 0 ? '+' : '') + rounded + '°';
    }

    function formatDayLabel(dateStr, index) {
        var parts = dateStr.split('-');
        var dateObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        var shortDate = dateObj.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }).replace('.', '');

        if (index === 0) return { title: 'Сегодня', sub: shortDate };
        if (index === 1) return { title: 'Завтра', sub: shortDate };

        var weekday = dateObj.toLocaleDateString('ru-RU', { weekday: 'short' });
        weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
        return { title: weekday, sub: shortDate };
    }

    function buildForecastHtml(dailyList) {
        if (!dailyList || !dailyList.length) return '';

        return dailyList
            .map(function (day, idx) {
                var dayWeather = describeWeatherCode(day.code);
                var label = formatDayLabel(day.dateStr, idx);

                return (
                    '<div class="col">' +
                        '<div class="weather-forecast-day p-2 p-sm-3 text-center h-100 d-flex flex-column justify-content-between">' +
                            '<div>' +
                                '<div class="fw-semibold small">' + label.title + '</div>' +
                                '<div class="opacity-75" style="font-size: 0.72rem;">' + label.sub + '</div>' +
                            '</div>' +
                            '<div class="fs-3 my-2" aria-hidden="true">' + dayWeather.icon + '</div>' +
                            '<div class="small">' +
                                '<span class="fw-bold">' + formatTemp(day.max) + '</span>' +
                                '<span class="opacity-75 ms-1">/ ' + formatTemp(day.min) + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
            })
            .join('');
    }

    function renderWidget(container, data, isLive) {
        var weather = describeWeatherCode(data.code);
        var tip = getTouristTip(data.temp, data.code);
        var statusText = isLive ? 'Сейчас в Стерлитамаке' : 'Сезонный ориентир';
        var isRoutesPage = window.location.pathname.indexOf('routes.html') !== -1;
        var actionHref = isRoutesPage ? 'nature.html' : 'routes.html';
        var actionLabel = isRoutesPage ? 'Природа и шиханы →' : 'Выбрать маршрут →';
        var forecastHtml = buildForecastHtml(data.daily);

        container.innerHTML =
            '<div class="card border-0 shadow overflow-hidden weather-widget-card ' + weather.theme + '">' +
                '<div class="card-body p-4 p-md-4">' +
                    '<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">' +
                        '<div class="d-flex align-items-center gap-2">' +
                            '<span class="fw-bold fs-5">Погода в Стерлитамаке</span>' +
                            '<span class="badge weather-glass-badge">' +
                                statusText +
                            '</span>' +
                        '</div>' +
                        '<button type="button" class="btn btn-outline-light btn-sm px-3" id="weatherRefreshBtn">' +
                            '↻ Обновить' +
                        '</button>' +
                    '</div>' +

                    '<div class="row g-3 align-items-center mb-4">' +
                        '<div class="col-12 col-md-6">' +
                            '<div class="d-flex align-items-center gap-3">' +
                                '<div style="font-size: 3.25rem; line-height: 1;" aria-hidden="true">' + weather.icon + '</div>' +
                                '<div>' +
                                    '<div class="d-flex align-items-baseline gap-2">' +
                                        '<span class="weather-temp-main">' + formatTemp(data.temp) + 'C</span>' +
                                        '<span class="fs-6 opacity-90">' + weather.text + '</span>' +
                                    '</div>' +
                                    '<div class="small opacity-75 mt-1">' +
                                        'Ощущается как ' + formatTemp(data.feels) + 'C' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +

                        '<div class="col-12 col-md-6">' +
                            '<div class="row g-2 text-center">' +
                                '<div class="col-4">' +
                                    '<div class="weather-glass-box p-2">' +
                                        '<div class="opacity-75" style="font-size: 0.72rem;">Ветер</div>' +
                                        '<div class="fw-bold small">' + Math.round(data.wind) + ' м/с</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-4">' +
                                    '<div class="weather-glass-box p-2">' +
                                        '<div class="opacity-75" style="font-size: 0.72rem;">Влажность</div>' +
                                        '<div class="fw-bold small">' + Math.round(data.humidity) + '%</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-4">' +
                                    '<div class="weather-glass-box p-2">' +
                                        '<div class="opacity-75" style="font-size: 0.72rem;">Давление</div>' +
                                        '<div class="fw-bold small">' + Math.round(data.pressure) + ' мм</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="row row-cols-2 row-cols-sm-5 g-2 mb-3">' +
                        forecastHtml +
                    '</div>' +

                    '<div class="weather-glass-box p-3 d-flex flex-wrap justify-content-between align-items-center gap-3">' +
                        '<div class="small mb-0">' +
                            '<strong class="me-1">Совет туристу:</strong>' +
                            '<span class="opacity-90">' + tip + '</span>' +
                        '</div>' +
                        '<a href="' + actionHref + '" class="btn btn-sm fw-semibold weather-action-btn px-3 flex-shrink-0">' +
                            actionLabel +
                        '</a>' +
                    '</div>' +
                '</div>' +
            '</div>';

        var refreshBtn = document.getElementById('weatherRefreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', function () {
                refreshBtn.disabled = true;
                refreshBtn.textContent = 'Обновление...';
                loadLiveWeather(container);
            });
        }
    }

    function loadLiveWeather(container) {
        if (typeof fetch !== 'function') return;

        fetch(WEATHER_API_URL)
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(function (json) {
                if (!json || !json.current) return;

                var dailyList = [];
                if (json.daily && json.daily.time) {
                    for (var i = 0; i < json.daily.time.length; i += 1) {
                        dailyList.push({
                            dateStr: json.daily.time[i],
                            code: json.daily.weather_code[i],
                            max: json.daily.temperature_2m_max[i],
                            min: json.daily.temperature_2m_min[i]
                        });
                    }
                }

                var pressureMmHg = json.current.surface_pressure
                    ? json.current.surface_pressure * 0.750062
                    : 750;

                renderWidget(
                    container,
                    {
                        temp: json.current.temperature_2m,
                        feels: json.current.apparent_temperature,
                        wind: json.current.wind_speed_10m,
                        humidity: json.current.relative_humidity_2m,
                        pressure: pressureMmHg,
                        code: json.current.weather_code,
                        daily: dailyList
                    },
                    true
                );
            })
            .catch(function () {
                var refreshBtn = document.getElementById('weatherRefreshBtn');
                if (refreshBtn) {
                    refreshBtn.disabled = false;
                    refreshBtn.textContent = '↻ Обновить';
                }
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var container = document.getElementById('weatherWidgetSection');
        if (!container) return;

        renderWidget(container, getSeasonalFallback(), false);
        loadLiveWeather(container);
    });
})();
