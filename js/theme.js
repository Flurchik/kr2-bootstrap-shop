(function () {
    'use strict';

    var THEME_STORAGE_KEY = 'sterlitamak-theme';

    var ICON_MOON =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">' +
        '<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>' +
        '</svg>';

    var ICON_SUN =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">' +
        '<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>' +
        '</svg>';

    function getSavedTheme() {
        try {
            var stored = localStorage.getItem(THEME_STORAGE_KEY);
            return stored === 'dark' ? 'dark' : 'light';
        } catch (err) {
            return 'light';
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (err) {
            return;
        }
    }

    function updateThemeButton(theme, animateFallback) {
        var btn = document.getElementById('themeToggleBtn');
        if (!btn) return;

        var isDark = theme === 'dark';
        btn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
        btn.setAttribute('title', isDark ? 'Светлая тема' : 'Тёмная тема');
        btn.setAttribute('aria-label', isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему');

        if (animateFallback) {
            btn.classList.remove('theme-icon-rotate');
            void btn.offsetWidth;
            btn.classList.add('theme-icon-rotate');
        }
    }

    function applyTheme(theme, animateFallback) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        updateThemeButton(theme, animateFallback);
    }

    function toggleTheme() {
        var current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        saveTheme(next);

        var prefersReducedMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (typeof document.startViewTransition === 'function' && !prefersReducedMotion) {
            document.startViewTransition(function () {
                applyTheme(next, false);
            });
            return;
        }

        document.documentElement.classList.add('theme-transition');
        applyTheme(next, true);
        setTimeout(function () {
            document.documentElement.classList.remove('theme-transition');
        }, 350);
    }

    applyTheme(getSavedTheme(), false);

    document.addEventListener('DOMContentLoaded', function () {
        var current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        updateThemeButton(current, false);

        var btn = document.getElementById('themeToggleBtn');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
            btn.addEventListener('animationend', function () {
                btn.classList.remove('theme-icon-rotate');
            });
        }
    });
})();
