
const SEARCH_INDEX = [
    {
        title: 'Главная страница портала',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'index.html',
        description: 'Общий обзор города Стерлитамак: ключевые факты, история и популярные места.',
        keywords: 'главная старт обзор стерлитамак город'
    },
    {
        title: 'История города Стерлитамака',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'history.html',
        description: 'Вехи развития от соляной пристани 1766 года до современного промышленного центра.',
        keywords: 'история даты хроника прошлое герб'
    },
    {
        title: 'Природа и архитектура',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'nature.html',
        description: 'Шиханы, четыре реки города и главные памятники купеческого и советского зодчества.',
        keywords: 'природа архитектура достопримечательности здания горы реки'
    },
    {
        title: 'Известные люди Стерлитамака',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'people.html',
        description: 'Выдающиеся земляки: олимпийские чемпионы, артисты, певцы и популярные блогеры.',
        keywords: 'люди земляки личности знаменитости'
    },
    {
        title: 'Туристические маршруты на карте',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'routes.html',
        description: 'Интерактивная карта Яндекс с 3 готовыми пешими и автомаршрутами по городу и окрестностям.',
        keywords: 'маршруты карта яндекс прогулка экскурсия гид'
    },
    {
        title: 'Контакты и как добраться',
        category: 'Раздел',
        badgeClass: 'bg-success text-white',
        url: 'contacts.html',
        description: 'Инфоцентр, телефоны вокзалов, экстренные службы (112), транспорт и форма обратной связи.',
        keywords: 'контакты телефон адрес добраться самолет поезд орлан автобус'
    },

    {
        title: 'Шихан Торатау (Тратау)',
        category: 'Природа',
        badgeClass: 'bg-blue text-white',
        url: 'nature.html#toratau',
        description: 'Священная гора высотой 406 м, древний риф Пермского моря возрастом более 285 млн лет и геопарк ЮНЕСКО.',
        keywords: 'торатау тратау шихан гора риф геопарк юнеско юрматы экотропа'
    },
    {
        title: 'Шихан Куштау',
        category: 'Природа',
        badgeClass: 'bg-blue text-white',
        url: 'nature.html#kushtau',
        description: 'Лесистый хребет высотой 357 м, памятник природы и горнолыжный комплекс к востоку от города.',
        keywords: 'куштау шихан гора лес горнолыжный комплекс лыжи заказник 2020'
    },
    {
        title: 'Шихан Юрактау и озеро Мокша',
        category: 'Природа',
        badgeClass: 'bg-blue text-white',
        url: 'nature.html#yuraktau',
        description: 'Конусообразная «гора-сердце» (338 м) над рекой Белой и чистое родниковое озеро Мокша.',
        keywords: 'юрактау шихан сердце гора озеро мокша белая'
    },
    {
        title: 'Четыре реки: Белая, Ашкадар, Стерля и Ольховка',
        category: 'Природа',
        badgeClass: 'bg-blue text-white',
        url: 'nature.html#rivers',
        description: 'Водные артерии города, набережная реки Стерли с пешеходными мостиками и пляж на Ашкадаре.',
        keywords: 'реки белая агидель ашкадар стерля ольховка набережная пляж'
    },

    {
        title: 'Историко-краеведческий музей (Сибирский банк)',
        category: 'Архитектура',
        badgeClass: 'bg-warning text-dark',
        url: 'nature.html#museum',
        description: 'Особняк 1914 года на ул. Карла Маркса, 100. Хранит артефакты сарматов и метеорит весом 315 кг.',
        keywords: 'музей краеведческий сибирский банк карла маркса метеорит 1914'
    },
    {
        title: 'Бывшая земская управа (Башревком)',
        category: 'Архитектура',
        badgeClass: 'bg-warning text-dark',
        url: 'nature.html#zemstvo',
        description: 'Монументальное здание 1914 года из красного кирпича на ул. Карла Маркса, 103.',
        keywords: 'земская управа башревком карла маркса архитектура модерн 1914'
    },
    {
        title: 'Свято-Никольский кафедральный собор',
        category: 'Архитектура',
        badgeClass: 'bg-warning text-dark',
        url: 'nature.html#sobor',
        description: 'Старейший каменный храм города (1838 г.) в стиле русского классицизма на ул. Калинина, 52.',
        keywords: 'никольский собор храм церковь классицизм калинина 1838'
    },
    {
        title: 'Кинотеатр «Салават»',
        category: 'Архитектура',
        badgeClass: 'bg-warning text-dark',
        url: 'nature.html#salavat',
        description: 'Восьмиколонный памятник советского неоклассицизма 1959 года на проспекте Ленина.',
        keywords: 'кинотеатр салават колоннада проспект ленина 1959 неоклассицизм'
    },
    {
        title: 'Русский драматический театр',
        category: 'Архитектура',
        badgeClass: 'bg-warning text-dark',
        url: 'nature.html#dramtheater',
        description: 'Ведущий театр юга республики на Театральной площади (ул. Худайбердина, 18), основан в 1946 году.',
        keywords: 'драмтеатр театр театральная площадь фонтан худайбердина культура 1946'
    },

    {
        title: 'Татьяна Анциферова',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#anciferova',
        description: 'Советская эстрадная певица, родилась в Стерлитамаке. Голос песни «До свиданья, Москва» (Олимпиада-80).',
        keywords: 'анциферова татьяна певица музыка олимпиада 31 июня'
    },
    {
        title: 'Лариса Баранова',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#baranova',
        description: 'Актриса театра и кино, выпускница республиканского техникума культуры. Известна по роли в сериале «Универ».',
        keywords: 'баранова лариса актриса кино театр универ сашатаня'
    },
    {
        title: 'Александра Солдатова',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#soldatova',
        description: 'Художественная гимнастика, четырёхкратная чемпионка мира и трёхкратная чемпионка Европы.',
        keywords: 'солдатова александра спорт гимнастика чемпионка мира'
    },
    {
        title: 'Ирек Зарипов',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#zaripov',
        description: 'Заслуженный мастер спорта, четырёхкратный чемпион Паралимпиады-2010 в Ванкувере, почётный гражданин.',
        keywords: 'зарипов ирек спорт биатлон лыжи паралимпиец ванкувер'
    },
    {
        title: 'Татьяна Лебедева',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#lebedeva',
        description: 'Олимпийская чемпионка 2004 года (Афины) и многократная чемпионка мира по прыжкам в длину и тройному прыжку.',
        keywords: 'лебедева татьяна спорт легкая атлетика олимпиада прыжки'
    },
    {
        title: 'Евгений Баженов (BadComedian)',
        category: 'Люди',
        badgeClass: 'bg-danger text-white',
        url: 'people.html#badcomedian',
        description: 'Популярный видеоблогер, кинообозреватель и автор канала «BadComedian», родился в Стерлитамаке.',
        keywords: 'баженов евгений badcomedian бэдкомедиан блогер кино критик'
    },

    {
        title: '1766 г. — Ашкадарская соляная пристань',
        category: 'История',
        badgeClass: 'bg-secondary text-white',
        url: 'history.html#history-facts',
        description: 'Основание Стерлитамака купцом Саввой Тетюшевым как перевалочного пункта илецкой соли.',
        keywords: '1766 основание пристань соль савва тетюшев ашкадар'
    },
    {
        title: '1781–1782 гг. — Уездный город и герб с гусями',
        category: 'История',
        badgeClass: 'bg-secondary text-white',
        url: 'history.html#history-faq',
        description: 'Указ Екатерины II о статусе города и пожалование герба с тремя серебряными дикими гусями.',
        keywords: '1781 1782 екатерина герб три гуся уездный город'
    },
    {
        title: '1919–1922 гг. — Первая столица БАССР',
        category: 'История',
        badgeClass: 'bg-secondary text-white',
        url: 'history.html#history-facts',
        description: 'Стерлитамак был первой столицей Автономной Советской Башкирии и центром Башревкома.',
        keywords: '1919 1922 столица басср башкирия башревком'
    },
    {
        title: '1990 г. — Стерлитамакский метеорит (315 кг)',
        category: 'История',
        badgeClass: 'bg-secondary text-white',
        url: 'history.html#history-meteorite',
        description: 'Падение железного метеорита в 1990 году — второго по величине в России. Хранится в краеведческом музее.',
        keywords: '1990 метеорит космос 315 кг музей'
    },

    {
        title: 'Маршрут «Купеческий Стерлитамак» (3.2 км)',
        category: 'Маршруты',
        badgeClass: 'bg-success text-white',
        url: 'routes.html?route=merchant',
        description: 'Пешеходный маршрут по историческому центру: музей, Земская управа и Никольский собор.',
        keywords: 'маршрут купеческий пеший центр карта 3.2 км'
    },
    {
        title: 'Маршрут «Шиханы и рифы древнего моря» (65 км)',
        category: 'Маршруты',
        badgeClass: 'bg-blue text-white',
        url: 'routes.html?route=shikhany',
        description: 'Автопутешествие по трём шиханам: Торатау, Куштау и Юрактау (озеро Мокша).',
        keywords: 'маршрут шиханы авто трекинг торатау куштау юрактау карта'
    },
    {
        title: 'Маршрут «Культурный променад и набережная» (1.4 км)',
        category: 'Маршруты',
        badgeClass: 'bg-warning text-dark',
        url: 'routes.html?route=culture',
        description: 'Лёгкая прогулка: Русский драмтеатр, к/т «Салават» и парк на набережной реки Стерли.',
        keywords: 'маршрут прогулка культурный набережная драмтеатр салават карта'
    },

    {
        title: 'Как добраться: самолёт, поезд «Орлан», автобус',
        category: 'Туристу',
        badgeClass: 'bg-secondary text-white',
        url: 'contacts.html#section-transport',
        description: 'Аэропорт Уфа (120 км), пригородный рельсовый автобус «Орлан» с ж/д вокзала и трасса Р-240.',
        keywords: 'транспорт самолет уфа поезд орлан р240 автовокзал вокзал'
    },
    {
        title: 'Инфоцентр, экстренные номера (112) и обратная связь',
        category: 'Туристу',
        badgeClass: 'bg-secondary text-white',
        url: 'contacts.html#section-contacts',
        description: 'Телефоны туристического центра, автовокзала, ж/д вокзала и форма вопроса гиду.',
        keywords: 'инфоцентр 112 мчс скорая помощь обратная связь вопрос гиду'
    }
];

const SUGGESTED_QUERIES = ['Шиханы', 'Музей', '1766', 'Маршруты', 'BadComedian'];

function normalizeText(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/ё/g, 'е')
        .trim();
}

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightMatch(text, queryTokens) {
    const safeText = escapeHtml(text);
    if (!queryTokens.length) return safeText;

    const patternParts = queryTokens
        .filter(token => token.length > 0)
        .map(token => escapeRegExp(token).replace(/е/gi, '[её]'));

    if (!patternParts.length) return safeText;

    const regex = new RegExp(`(${patternParts.join('|')})`, 'gi');
    return safeText.replace(regex, '<mark class="search-mark">$1</mark>');
}

function searchItems(rawQuery) {
    const normalizedQuery = normalizeText(rawQuery);
    if (!normalizedQuery) return [];

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

    return SEARCH_INDEX
        .map(item => {
            const titleNorm = normalizeText(item.title);
            const catNorm = normalizeText(item.category);
            const descNorm = normalizeText(item.description);
            const keysNorm = normalizeText(item.keywords);
            const fullText = `${titleNorm} ${catNorm} ${descNorm} ${keysNorm}`;

            const allMatch = tokens.every(token => fullText.includes(token));
            if (!allMatch) return null;

            let score = 0;
            tokens.forEach(token => {
                if (titleNorm.includes(token)) score += 5;
                if (catNorm.includes(token)) score += 2;
                if (descNorm.includes(token)) score += 1;
                if (keysNorm.includes(token)) score += 1;
            });
            if (titleNorm.startsWith(tokens[0])) score += 3;

            return { item, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .map(entry => entry.item);
}

function ensureSearchModalExists() {
    if (document.getElementById('siteSearchModal')) return;

    const modalHtml = `
        <div class="modal fade" id="siteSearchModal" tabindex="-1" aria-labelledby="siteSearchModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content border-0 shadow-lg">
                    <div class="modal-header border-bottom pb-3">
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-transparent border-end-0 text-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </span>
                            <input
                                type="search"
                                id="siteSearchInput"
                                class="form-control border-start-0 shadow-none"
                                placeholder="Поиск по сайту: Шиханы, музей, 1766, люди, маршруты..."
                                aria-label="Поиск по сайту"
                                autocomplete="off"
                            >
                        </div>
                        <button type="button" class="btn-close ms-2" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div class="modal-body p-3">
                        <div id="siteSearchStatus" class="small text-muted mb-2 px-1"></div>
                        <div id="siteSearchResults" class="list-group list-group-flush gap-1"></div>
                    </div>
                    <div class="modal-footer justify-content-between py-2 bg-body-tertiary small text-muted">
                        <span id="siteSearchModalLabel">Навигация: <kbd>↑</kbd> <kbd>↓</kbd> выбор &bull; <kbd>Enter</kbd> перейти &bull; <kbd>Esc</kbd> закрыть</span>
                        <span>Портал «Стерлитамак»</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function getCurrentPageFilename() {
    const file = window.location.pathname.split('/').pop();
    return file || 'index.html';
}

function pulseTargetElement(elementId) {
    if (!elementId) return;
    const target = document.getElementById(elementId);
    if (!target) return;

    target.classList.remove('search-target-highlight');
    void target.offsetWidth;
    target.classList.add('search-target-highlight');
}

document.addEventListener('DOMContentLoaded', () => {
    ensureSearchModalExists();

    const modalEl = document.getElementById('siteSearchModal');
    const inputEl = document.getElementById('siteSearchInput');
    const resultsEl = document.getElementById('siteSearchResults');
    const statusEl = document.getElementById('siteSearchStatus');

    if (!modalEl || !inputEl || !resultsEl || !statusEl || typeof bootstrap === 'undefined') {
        return;
    }

    const searchModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    let activeIndex = -1;

    if (window.location.hash) {
        const hashId = window.location.hash.slice(1);
        setTimeout(() => pulseTargetElement(hashId), 200);
    }

    function updateActiveItem(newIndex) {
        const items = resultsEl.querySelectorAll('.search-result-item');
        if (!items.length) {
            activeIndex = -1;
            return;
        }

        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;

        items.forEach(el => el.classList.remove('active'));
        activeIndex = newIndex;
        items[activeIndex].classList.add('active');
        items[activeIndex].scrollIntoView({ block: 'nearest' });
    }

    function renderEmptyState() {
        activeIndex = -1;
        statusEl.textContent = 'Популярные запросы — нажмите на подсказку или начните вводить текст:';

        const chipsHtml = SUGGESTED_QUERIES.map(term => `
            <button type="button" class="btn btn-sm btn-outline-success rounded-pill search-chip" data-query="${escapeHtml(term)}">
                ${escapeHtml(term)}
            </button>
        `).join('');

        const quickLinksHtml = SEARCH_INDEX.slice(0, 4).map(item => `
            <a href="${escapeHtml(item.url)}" class="list-group-item list-group-item-action rounded border search-result-item py-2 px-3">
                <div class="d-flex justify-content-between align-items-center gap-2">
                    <strong class="text-body">${escapeHtml(item.title)}</strong>
                    <span class="badge ${escapeHtml(item.badgeClass)}">${escapeHtml(item.category)}</span>
                </div>
                <div class="small text-muted text-truncate mt-1">${escapeHtml(item.description)}</div>
            </a>
        `).join('');

        resultsEl.innerHTML = `
            <div class="d-flex flex-wrap gap-2 mb-3 px-1">${chipsHtml}</div>
            ${quickLinksHtml}
        `;
    }

    function renderResults(query) {
        const normalized = normalizeText(query);
        if (!normalized) {
            renderEmptyState();
            return;
        }

        const tokens = normalized.split(/\s+/).filter(Boolean);
        const matches = searchItems(query);
        activeIndex = -1;

        if (!matches.length) {
            statusEl.textContent = 'Ничего не найдено';
            resultsEl.innerHTML = `
                <div class="text-center py-4 text-muted">
                    <div class="fs-3 mb-2">&#128269;</div>
                    <p class="mb-1 fw-semibold">По запросу «${escapeHtml(query)}» совпадений нет</p>
                    <p class="small mb-0">Попробуйте: Торатау, метеорит, Зарипов, 1766 или маршруты.</p>
                </div>
            `;
            return;
        }

        statusEl.textContent = `Найдено результатов: ${matches.length}`;

        resultsEl.innerHTML = matches.map((item, idx) => `
            <a href="${escapeHtml(item.url)}" class="list-group-item list-group-item-action rounded border search-result-item py-2 px-3${idx === 0 ? ' active' : ''}">
                <div class="d-flex justify-content-between align-items-start gap-2">
                    <span class="fw-semibold">${highlightMatch(item.title, tokens)}</span>
                    <span class="badge ${escapeHtml(item.badgeClass)} flex-shrink-0">${escapeHtml(item.category)}</span>
                </div>
                <p class="small text-muted mb-0 mt-1">${highlightMatch(item.description, tokens)}</p>
            </a>
        `).join('');

        activeIndex = 0;
    }

    modalEl.addEventListener('shown.bs.modal', () => {
        if (!inputEl.value.trim()) {
            renderEmptyState();
        }
        inputEl.focus();
        inputEl.select();
    });

    inputEl.addEventListener('input', () => {
        renderResults(inputEl.value);
    });

    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            updateActiveItem(activeIndex + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            updateActiveItem(activeIndex - 1);
        } else if (e.key === 'Enter') {
            const activeLink = resultsEl.querySelector('.search-result-item.active');
            if (activeLink) {
                e.preventDefault();
                activeLink.click();
            }
        }
    });

    resultsEl.addEventListener('click', (e) => {
        const chip = e.target.closest('.search-chip');
        if (chip) {
            inputEl.value = chip.getAttribute('data-query') || '';
            renderResults(inputEl.value);
            inputEl.focus();
            return;
        }

        const link = e.target.closest('.search-result-item');
        if (!link) return;

        const href = link.getAttribute('href') || '';
        const [targetPage, targetHash] = href.split('#');
        const currentPage = getCurrentPageFilename();

        if (targetHash && (!targetPage || targetPage === currentPage)) {
            e.preventDefault();
            searchModal.hide();

            setTimeout(() => {
                const targetEl = document.getElementById(targetHash);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    history.replaceState(null, '', `#${targetHash}`);
                    pulseTargetElement(targetHash);
                }
            }, 220);
        }
    });

    document.addEventListener('keydown', (e) => {
        const isCtrlK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
        const isSlash = e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);

        if (isCtrlK || isSlash) {
            e.preventDefault();
            if (modalEl.classList.contains('show')) {
                searchModal.hide();
            } else {
                searchModal.show();
            }
        }
    });
});
