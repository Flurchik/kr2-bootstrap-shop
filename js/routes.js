const ROUTES_DATA = {
    merchant: {
        id: 'merchant',
        title: 'Купеческий Стерлитамак',
        badge: 'Пешеходный',
        badgeClass: 'bg-success text-white',
        activeBtnClass: 'btn-success text-white',
        routingMode: 'pedestrian',
        distance: '3.2 км',
        duration: '1.5–2 часа',
        color: '#198754',
        yandexPreset: 'islands#darkGreenCircleIcon',
        description: 'Маршрут по историческому центру: старинная улица Карла Маркса (бывшая Большая Заводская), купеческие особняки XIX века и старейший каменный собор.',
        yandexUrl: 'https://yandex.ru/maps/?rtext=53.617121,55.964647~53.617367,55.964153~53.607303,55.929828&rtt=pd',
        stops: [
            {
                id: 'm1',
                number: 1,
                name: 'Историко-краеведческий музей',
                lat: 53.617121,
                lng: 55.964647,
                address: 'г. Стерлитамак, ул. Карла Маркса, 100',
                time: 'Старт • Вт–Сб 10:00–18:00',
                image: 'images/museum-bank.jpg',
                description: 'Бывшее здание Сибирского купеческого банка конца XIX века. Главная жемчужина экспозиции — подлинный метеорит «Стерлитамак» весом 315 кг.',
                details: 'Кирпичный стиль купеческого зодчества. Экспозиция охватывает историю от основания Ашкадарской соляной пристани купцом Саввой Тетюшевым до советской эпохи.'
            },
            {
                id: 'm2',
                number: 2,
                name: 'Здание Земской управы (Башревком)',
                lat: 53.617367,
                lng: 55.964153,
                address: 'г. Стерлитамак, ул. Карла Маркса, 103',
                time: '+2 мин пешком • 15 мин',
                image: 'images/zemskaya-uprava.jpg',
                description: 'Памятник истории и архитектуры 1914 года. Здесь в 1919–1920 годах работало первое советское правительство Башкирской АССР.',
                details: 'Здание в стиле неоклассицизма служило центром уездного самоуправления, а в годы Гражданской войны стало колыбелью государственности республики.'
            },
            {
                id: 'm3',
                number: 3,
                name: 'Свято-Никольский кафедральный собор',
                lat: 53.607303,
                lng: 55.929828,
                address: 'г. Стерлитамак, ул. Калинина, 52',
                time: '+25 мин пешком • 30 мин',
                image: 'images/nikolsky-sobor.jpg',
                description: 'Старейшее сохранившееся каменное здание города (1838 год). Построено в стиле классицизма на пожертвования прихожан и купцов.',
                details: 'Храм с величественной колокольней и купольной ротондой пережил советские годы и сохранил подлинное величие архитектуры русского классицизма.'
            }
        ]
    },
    shikhany: {
        id: 'shikhany',
        title: 'Шиханы и рифы древнего моря',
        badge: 'Авто + Трекинг',
        badgeClass: 'bg-blue text-white',
        activeBtnClass: 'btn-blue text-white',
        routingMode: 'auto',
        distance: '65 км',
        duration: '4–5 часов',
        color: '#0d6efd',
        yandexPreset: 'islands#blueCircleIcon',
        description: 'Автомобильное путешествие к уникальным древним рифам Пермского периода возрастом свыше 280 миллионов лет. Панорамы степей, эко-тропы и смотровые площадки.',
        yandexUrl: 'https://yandex.ru/maps/?rtext=53.553900,56.098900~53.700300,56.084700~53.742500,56.096700&rtt=auto',
        stops: [
            {
                id: 's1',
                number: 1,
                name: 'Шихан Торатау',
                lat: 53.5539,
                lng: 56.0989,
                address: 'Ишимбайский район, геопарк «Торатау» (18 км к югу)',
                time: '25 мин на авто • 2 часа',
                image: 'images/toratau.jpg',
                description: 'Священная гора башкирского рода Юрматы высотой 406 м. У подножия расположен визит-центр, на вершину ведёт комфортная эко-тропа.',
                details: 'На крутых склонах сохранились отпечатки древнейших губок, кораллов и членистоногих, обитавших на дне тёплого Пермского океана.'
            },
            {
                id: 's2',
                number: 2,
                name: 'Шихан Куштау',
                lat: 53.7003,
                lng: 56.0847,
                address: 'Стерлитамакский район, урочище Куштау (15 км к востоку)',
                time: '35 мин на авто • 1.5 часа',
                image: 'images/kushtau.jpg',
                description: 'Самый лесистый и вытянутый шихан-хребет. Памятник природы республиканского значения и всесезонная база горнолыжного спорта.',
                details: 'Высота горы 357 м над уровнем моря. Зимой здесь работают бугельные подъёмники и горнолыжные трассы, летом — живописные пешие маршруты.'
            },
            {
                id: 's3',
                number: 3,
                name: 'Шихан Юрактау',
                lat: 53.7425,
                lng: 56.0967,
                address: 'Стерлитамакский район, подножие Юрактау (20 км к северу)',
                time: '15 мин на авто • 1 час',
                image: 'images/uraktau.jpg',
                description: 'Северный одиночный шихан конусообразной формы («Сердце-гора») у излучины реки Белой и кристально чистого озера Мокша.',
                details: 'Высота 338 м над уровнем моря. С вершины открывается великолепная круговая панорама долины реки Агидель и башкирских степей.'
            }
        ]
    },
    culture: {
        id: 'culture',
        title: 'Культурный променад и набережная',
        badge: 'Пешеходный',
        badgeClass: 'bg-warning text-dark',
        activeBtnClass: 'btn-warning text-dark',
        routingMode: 'pedestrian',
        distance: '1.4 км',
        duration: '1.5 часа',
        color: '#ffc107',
        yandexPreset: 'islands#orangeCircleIcon',
        description: 'Светский пешеходный маршрут: Театральная площадь со светомузыкальным фонтаном, монументальный кинотеатр «Салават» и современный парк на набережной реки Стерля.',
        yandexUrl: 'https://yandex.ru/maps/?rtext=53.619567,55.963524~53.618526,55.963731~53.621090,55.949822&rtt=pd',
        stops: [
            {
                id: 'c1',
                number: 1,
                name: 'Русский драматический театр',
                lat: 53.619567,
                lng: 55.963524,
                address: 'г. Стерлитамак, ул. Худайбердина, 18 (Театральная пл.)',
                time: 'Старт • 30 мин на площади',
                image: 'images/dramatheater.jpg',
                description: 'Главная драматическая сцена юга Башкортостана. Здание формирует ансамбль Театральной площади со светомузыкальным фонтаном.',
                details: 'Театр основан в 1946 году, является лауреатом всероссийских театральных фестивалей и излюбленным местом вечерних встреч горожан.'
            },
            {
                id: 'c2',
                number: 2,
                name: 'Кинотеатр «Салават» и сквер',
                lat: 53.618526,
                lng: 55.963731,
                address: 'г. Стерлитамак, ул. Комсомольская, 80',
                time: '+4 мин пешком • 20 мин',
                image: 'images/salavat-cinema.jpg',
                description: 'Жемчужина советского неоклассицизма 1959 года с коринфскими колоннами, лепными карнизами и сквером с памятником Салавату Юлаеву.',
                details: 'Исторический центр культурного досуга нескольких поколений горожан, ставший архитектурной визитной карточкой города.'
            },
            {
                id: 'c3',
                number: 3,
                name: 'Парк на набережной реки Стерля',
                lat: 53.621090,
                lng: 55.949822,
                address: 'г. Стерлитамак, ул. Шафиева (у моста по ул. Худайбердина)',
                time: '+12 мин пешком • 40 мин прогулки',
                image: 'images/park-naberejnaya.jpg',
                description: 'Благоустроенный парк вдоль русла реки Стерли со смотровыми площадками, пешеходными и велодорожками, уткоматами и зонами отдыха.',
                details: 'На берегах реки Стерли в 1766 году зарождался город. Сегодня это главное благоустроенное общественное пространство Стерлитамака у воды.'
            }
        ]
    }
};

let myMap = null;
let currentRouteId = 'merchant';
let geoCollection = null;
let currentMultiRoute = null;
let markerMap = {};

function initYandexMap() {
    if (typeof ymaps === 'undefined') {
        const container = document.getElementById('routesMap');
        if (container) {
            container.innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center text-muted">
                    <span class="fs-1 mb-2">&#128506;</span>
                    <h5 class="fw-bold">Яндекс.Карты подключаются...</h5>
                    <p class="small mb-0">При отсутствии сети вы можете просматривать список локаций и их описания слева.</p>
                </div>
            `;
        }
        return;
    }

    ymaps.ready(() => {
        myMap = new ymaps.Map('routesMap', {
            center: [53.617121, 55.964647],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
        }, {
            searchControlProvider: 'yandex#search'
        });

        geoCollection = new ymaps.GeoObjectCollection();
        myMap.geoObjects.add(geoCollection);

        const urlParams = new URLSearchParams(window.location.search);
        const requestedRoute = urlParams.get('route');

        if (requestedRoute === 'all') {
            showAllRoutesOnMap();
        } else if (requestedRoute && ROUTES_DATA[requestedRoute]) {
            loadRoute(requestedRoute);
        } else {
            loadRoute('merchant');
        }
    });
}

function clearMapLayers() {
    if (!myMap) return;
    if (geoCollection) {
        geoCollection.removeAll();
    }
    if (currentMultiRoute) {
        myMap.geoObjects.remove(currentMultiRoute);
        currentMultiRoute = null;
    }
    markerMap = {};
}

function findStopById(stopId) {
    for (const route of Object.values(ROUTES_DATA)) {
        const stop = route.stops.find(s => s.id === stopId);
        if (stop) {
            return { stop, route };
        }
    }
    return null;
}

function updateButtonStyles(activeId) {
    document.querySelectorAll('[data-route-btn]').forEach(btn => {
        const id = btn.getAttribute('data-route-btn');
        btn.className = 'btn btn-sm px-3';
        if (id === activeId) {
            if (id === 'merchant') btn.classList.add('btn-success', 'text-white');
            else if (id === 'shikhany') btn.classList.add('btn-blue', 'text-white');
            else if (id === 'culture') btn.classList.add('btn-warning', 'text-dark');
            else if (id === 'all') btn.classList.add('btn-dark', 'text-white');
        } else {
            btn.classList.add('btn-outline-secondary');
        }
    });
}

function loadRoute(routeId) {
    const route = ROUTES_DATA[routeId];
    if (!route) return;

    currentRouteId = routeId;

    updateButtonStyles(routeId);

    const metaBadge = document.getElementById('routeMetaBadge');
    const metaTitle = document.getElementById('routeMetaTitle');
    const metaDistance = document.getElementById('routeMetaDistance');
    const metaDuration = document.getElementById('routeMetaDuration');
    const metaStops = document.getElementById('routeMetaStops');
    const metaDesc = document.getElementById('routeMetaDesc');
    const yandexBtn = document.getElementById('btnYandexMaps');

    if (metaBadge) {
        metaBadge.className = 'badge ' + route.badgeClass;
        metaBadge.textContent = route.badge;
    }
    if (metaTitle) metaTitle.textContent = route.title;
    if (metaDistance) metaDistance.textContent = route.distance;
    if (metaDuration) metaDuration.textContent = route.duration;
    if (metaStops) metaStops.textContent = route.stops.length + ' локации';
    if (metaDesc) metaDesc.textContent = route.description;
    if (yandexBtn) yandexBtn.href = route.yandexUrl;

    renderStopsList(route);

    if (myMap) {
        renderMapRoute(route);
    }
}

function renderStopsList(route) {
    const container = document.getElementById('stopsList');
    if (!container) return;

    container.innerHTML = '';

    route.stops.forEach((stop) => {
        const card = document.createElement('div');
        card.className = 'card border-0 shadow-sm mb-3 stop-card';
        card.setAttribute('data-stop-id', stop.id);

        card.innerHTML = `
            <div class="row g-0 align-items-center">
                <div class="col-8 col-sm-8 p-3">
                    <div class="d-flex align-items-center gap-2 mb-1">
                        <span class="stop-badge-circle" style="background-color: ${route.color};">${stop.number}</span>
                        <h6 class="fw-bold mb-0 text-truncate">${stop.name}</h6>
                    </div>
                    <p class="text-muted small mb-2 text-truncate-2">${stop.description}</p>
                    <div class="d-flex align-items-center gap-2">
                        <button type="button" class="btn btn-sm btn-outline-success btn-focus-stop" data-stop-id="${stop.id}">
                            На карте &rarr;
                        </button>
                        <button type="button" class="btn btn-sm btn-link text-decoration-none text-muted p-0 ms-2 btn-detail-stop" data-stop-id="${stop.id}">
                            Подробнее
                        </button>
                    </div>
                </div>
                <div class="col-4 col-sm-4 p-2 text-end">
                    <div class="stop-thumb-container">
                        <img src="${stop.image}" alt="${stop.name}" class="stop-thumb-img">
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-detail-stop')) {
                showStopModal(stop, route);
            } else {
                focusStop(stop.id);
            }
        });

        container.appendChild(card);
    });
}

function renderMapRoute(route) {
    if (!myMap) return;

    clearMapLayers();

    const points = route.stops.map(s => [s.lat, s.lng]);

    currentMultiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: points,
        params: {
            routingMode: route.routingMode,
            results: 1
        }
    }, {
        boundsAutoApply: true,
        wayPointVisible: false,
        routeActiveStrokeColor: route.color,
        routeActiveStrokeWidth: 6,
        routeActiveStrokeOpacity: 0.85,
        routeActivePedestrianSegmentStrokeColor: route.color,
        routeActivePedestrianSegmentStrokeWidth: 6
    });

    currentMultiRoute.model.events.add('requestsuccess', function () {
        const activeRoute = currentMultiRoute.getActiveRoute();
        if (activeRoute) {
            const distance = activeRoute.properties.get("distance");
            const duration = activeRoute.properties.get("duration");
            if (distance && distance.text) {
                const distEl = document.getElementById('routeMetaDistance');
                if (distEl) distEl.textContent = distance.text;
            }
            if (duration && duration.text) {
                const durEl = document.getElementById('routeMetaDuration');
                if (durEl) durEl.textContent = duration.text + ' в пути';
            }
        }
    });

    currentMultiRoute.model.events.add('requestfail', function () {
        const polyline = new ymaps.Polyline(points, {}, {
            strokeColor: route.color,
            strokeWidth: 4,
            strokeOpacity: 0.8
        });
        geoCollection.add(polyline);
        myMap.setBounds(geoCollection.getBounds(), { checkZoomRange: true, zoomMargin: 45 });
    });

    myMap.geoObjects.add(currentMultiRoute);

    route.stops.forEach(stop => {
        const point = [stop.lat, stop.lng];

        const balloonHtml = `
            <div style="max-width: 260px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;">
                <div style="width: 100%; height: 110px; overflow: hidden; border-radius: 6px; margin-bottom: 8px;">
                    <img src="${stop.image}" alt="${stop.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                </div>
                <strong style="font-size: 14px; display: block; margin-bottom: 4px; color: #212529;">${stop.name}</strong>
                <p style="font-size: 12px; color: #6c757d; margin-bottom: 6px; line-height: 1.35;">${stop.description}</p>
                <div style="font-size: 11px; color: #198754; font-weight: 600; margin-bottom: 6px;">&#128205; ${stop.address}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 6px;">
                    <span style="font-size: 11px; color: #6c757d;">&#9201; ${stop.time}</span>
                    <button style="border: 1px solid #ced4da; background: #fff; padding: 2px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;" onclick="showStopModalById('${stop.id}')">Детали</button>
                </div>
            </div>
        `;

        const placemark = new ymaps.Placemark(point, {
            balloonContent: balloonHtml,
            hintContent: `${stop.number}. ${stop.name}`,
            iconContent: String(stop.number)
        }, {
            preset: route.yandexPreset,
            iconColor: route.color,
            zIndex: 1000
        });

        placemark.events.add('click', () => {
            highlightStopCard(stop.id);
        });

        geoCollection.add(placemark);
        markerMap[stop.id] = placemark;
    });
}

function focusStop(stopId) {
    const found = findStopById(stopId);
    if (!found) return;
    const { stop } = found;
    const placemark = markerMap[stopId];
    if (!placemark || !myMap) return;

    myMap.panTo([stop.lat, stop.lng], {
        flying: true,
        duration: 600
    }).then(() => {
        placemark.balloon.open();
    });

    highlightStopCard(stopId);
}

function highlightStopCard(stopId) {
    document.querySelectorAll('.stop-card').forEach(c => {
        if (c.getAttribute('data-stop-id') === stopId) {
            c.classList.add('border-success');
            c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            c.classList.remove('border-success');
        }
    });
}

function showStopModal(stop, route) {
    const modalEl = document.getElementById('stopDetailModal');
    if (!modalEl) return;

    document.getElementById('modalStopTitle').textContent = stop.name;
    document.getElementById('modalStopImage').src = stop.image;
    document.getElementById('modalStopImage').alt = stop.name;
    document.getElementById('modalStopAddress').textContent = stop.address;
    document.getElementById('modalStopTime').textContent = stop.time;
    document.getElementById('modalStopDesc').textContent = stop.description;
    document.getElementById('modalStopDetails').textContent = stop.details;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
}

window.showStopModalById = function(stopId) {
    const found = findStopById(stopId);
    if (found) {
        showStopModal(found.stop, found.route);
    }
};

window.fitCurrentRoute = function() {
    if (!myMap) return;
    if (currentMultiRoute && currentMultiRoute.getBounds()) {
        myMap.setBounds(currentMultiRoute.getBounds(), { checkZoomRange: true, zoomMargin: 45 });
    } else if (geoCollection && geoCollection.getBounds()) {
        myMap.setBounds(geoCollection.getBounds(), { checkZoomRange: true, zoomMargin: 45 });
    }
};

window.showAllRoutesOnMap = function() {
    if (!myMap) return;

    clearMapLayers();

    updateButtonStyles('all');

    const metaTitle = document.getElementById('routeMetaTitle');
    const metaDesc = document.getElementById('routeMetaDesc');
    const metaBadge = document.getElementById('routeMetaBadge');
    const metaStops = document.getElementById('routeMetaStops');
    const metaDist = document.getElementById('routeMetaDistance');
    const metaDur = document.getElementById('routeMetaDuration');
    const yandexBtn = document.getElementById('btnYandexMaps');

    if (metaTitle) metaTitle.textContent = 'Все туристические маршруты';
    if (metaDesc) metaDesc.textContent = 'Обзорная карта: все 3 экскурсионных направления города Стерлитамак и его окрестностей.';
    if (metaBadge) {
        metaBadge.className = 'badge bg-dark text-white';
        metaBadge.textContent = '3 маршрута';
    }
    if (metaStops) metaStops.textContent = '9 локаций';
    if (metaDist) metaDist.textContent = 'Выберите маршрут';
    if (metaDur) metaDur.textContent = 'Выберите маршрут';
    if (yandexBtn) yandexBtn.href = 'https://yandex.ru/maps/?text=Стерлитамак+достопримечательности';

    const container = document.getElementById('stopsList');
    if (container) {
        container.innerHTML = '';
        Object.values(ROUTES_DATA).forEach(route => {
            const header = document.createElement('div');
            header.className = 'd-flex align-items-center justify-content-between mt-3 mb-2 pt-2 border-top';
            header.innerHTML = `
                <span class="badge ${route.badgeClass}">${route.title}</span>
                <span class="small text-muted">${route.distance}</span>
            `;
            container.appendChild(header);

            route.stops.forEach(stop => {
                const card = document.createElement('div');
                card.className = 'card border-0 shadow-sm mb-2 stop-card';
                card.setAttribute('data-stop-id', stop.id);
                card.innerHTML = `
                    <div class="row g-0 align-items-center">
                        <div class="col-8 col-sm-8 p-2 ps-3">
                            <div class="d-flex align-items-center gap-2 mb-1">
                                <span class="stop-badge-circle" style="background-color: ${route.color}; width: 26px; height: 26px; font-size: 0.8rem;">${stop.number}</span>
                                <h6 class="fw-bold mb-0 text-truncate small">${stop.name}</h6>
                            </div>
                            <span class="small text-muted d-block text-truncate" style="font-size: 0.75rem;">${stop.address}</span>
                        </div>
                        <div class="col-4 col-sm-4 p-2 text-end">
                            <div class="stop-thumb-container" style="height: 65px;">
                                <img src="${stop.image}" alt="${stop.name}" class="stop-thumb-img">
                            </div>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => focusStop(stop.id));
                container.appendChild(card);
            });
        });
    }

    Object.values(ROUTES_DATA).forEach(route => {
        const points = route.stops.map(s => [s.lat, s.lng]);

        const routePolyline = new ymaps.Polyline(points, {
            hintContent: `${route.title} (${route.distance})`
        }, {
            strokeColor: route.color,
            strokeWidth: 5,
            strokeOpacity: 0.9,
            strokeStyle: route.id === 'shikhany' ? 'dash' : 'solid'
        });
        geoCollection.add(routePolyline);

        route.stops.forEach(stop => {
            const balloonHtml = `
                <div style="max-width: 260px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;">
                    <div style="width: 100%; height: 110px; overflow: hidden; border-radius: 6px; margin-bottom: 8px;">
                        <img src="${stop.image}" alt="${stop.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    </div>
                    <strong style="font-size: 14px; display: block; margin-bottom: 4px; color: #212529;">${stop.name}</strong>
                    <p style="font-size: 12px; color: #6c757d; margin-bottom: 6px; line-height: 1.35;">${stop.description}</p>
                    <div style="font-size: 11px; color: ${route.color}; font-weight: 600; margin-bottom: 6px;">&#128205; ${stop.address}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 6px;">
                        <span style="font-size: 11px; color: #6c757d;">&#9201; ${stop.time}</span>
                        <button style="border: 1px solid #ced4da; background: #fff; padding: 2px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;" onclick="showStopModalById('${stop.id}')">Детали</button>
                    </div>
                </div>
            `;

            const placemark = new ymaps.Placemark([stop.lat, stop.lng], {
                balloonContent: balloonHtml,
                hintContent: `${stop.number}. ${stop.name} (${route.title})`,
                iconContent: String(stop.number)
            }, {
                preset: route.yandexPreset,
                iconColor: route.color
            });

            placemark.events.add('click', () => {
                highlightStopCard(stop.id);
            });

            geoCollection.add(placemark);
            markerMap[stop.id] = placemark;
        });
    });

    const bounds = geoCollection.getBounds();
    if (bounds) {
        myMap.setBounds(bounds, { checkZoomRange: true, zoomMargin: 45 });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initYandexMap();

    document.querySelectorAll('[data-route-btn]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const routeId = btn.getAttribute('data-route-btn');
            if (routeId === 'all') {
                showAllRoutesOnMap();
            } else {
                loadRoute(routeId);
            }
        });
    });
});
