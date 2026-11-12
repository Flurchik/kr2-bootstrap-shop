(function () {
    'use strict';

    var CIRCLE_RADIUS = 19;
    var CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
    var SHOW_AFTER_PX = 200;

    function createScrollButton() {
        var existing = document.getElementById('btnScrollToTop');
        if (existing) return existing;

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'btnScrollToTop';
        btn.className = 'btn-scroll-top';
        btn.setAttribute('aria-label', 'Наверх');
        btn.innerHTML =
            '<span class="scroll-top-label">Наверх</span>' +
            '<span class="scroll-top-circle" aria-hidden="true">' +
                '<svg class="scroll-top-ring" width="44" height="44" viewBox="0 0 44 44">' +
                    '<circle class="scroll-top-ring-bg" cx="22" cy="22" r="' + CIRCLE_RADIUS + '" fill="none" stroke-width="3"></circle>' +
                    '<circle class="scroll-top-ring-fill" cx="22" cy="22" r="' + CIRCLE_RADIUS + '" fill="none" stroke-width="3"></circle>' +
                '</svg>' +
                '<svg class="scroll-top-arrow" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">' +
                    '<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>' +
                '</svg>' +
            '</span>';

        document.body.appendChild(btn);
        return btn;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = createScrollButton();
        var progressCircle = btn.querySelector('.scroll-top-ring-fill');

        if (progressCircle) {
            progressCircle.style.strokeDasharray = String(CIRCLE_CIRCUMFERENCE);
            progressCircle.style.strokeDashoffset = String(CIRCLE_CIRCUMFERENCE);
        }

        function updateScrollState() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
            var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            var progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;

            if (progressCircle) {
                var offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
                progressCircle.style.strokeDashoffset = String(offset);
            }

            if (scrollTop >= SHOW_AFTER_PX) {
                btn.classList.add('is-visible');
            } else {
                btn.classList.remove('is-visible');
            }
        }

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState, { passive: true });
        updateScrollState();
    });
})();
