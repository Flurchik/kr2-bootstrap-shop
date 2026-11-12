(function () {
    'use strict';

    var filterBar = document.getElementById('peopleFilterBar');
    var cardsList = document.getElementById('peopleCardsList');
    var countBadge = document.getElementById('peopleFilterCount');

    if (!filterBar || !cardsList) return;

    var filterButtons = filterBar.querySelectorAll('[data-filter]');
    var cards = cardsList.querySelectorAll('[data-category]');

    function applyFilter(selectedCategory) {
        var visibleCount = 0;

        cards.forEach(function (card) {
            var cardCategory = card.getAttribute('data-category');
            var shouldShow = selectedCategory === 'all' || cardCategory === selectedCategory;

            if (shouldShow) {
                card.classList.remove('d-none');
                visibleCount += 1;
            } else {
                card.classList.add('d-none');
            }
        });

        filterButtons.forEach(function (btn) {
            var isActive = btn.getAttribute('data-filter') === selectedCategory;
            btn.classList.toggle('btn-success', isActive);
            btn.classList.toggle('text-white', isActive);
            btn.classList.toggle('btn-filter-idle', !isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        if (countBadge) {
            countBadge.textContent = 'Показано: ' + visibleCount + ' из ' + cards.length;
        }
    }

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var category = btn.getAttribute('data-filter') || 'all';
            applyFilter(category);
        });
    });

    window.addEventListener('hashchange', function () {
        if (window.location.hash) {
            applyFilter('all');
        }
    });

    applyFilter('all');
})();
