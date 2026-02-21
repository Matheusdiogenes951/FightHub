function mudouTamanho() {
    const itens = document.getElementById('itens');
    const menuToggle = document.getElementById('menu-toggle');
    if (!itens) return;

    if (window.innerWidth > 900) {
        itens.classList.remove('open');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        }
    }
}

// Mantem compatibilidade com o nome usado no HTML.
function mudoutamanho() {
    mudouTamanho();
}

document.addEventListener('DOMContentLoaded', function () {
    const itens = document.getElementById('itens');
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownLinks = document.querySelectorAll('.menu-dropdown > a');
    if (!itens) return;

    function isMobileMenu() {
        return window.innerWidth <= 900;
    }

    function closeAllDropdowns(except) {
        document.querySelectorAll('.menu-dropdown.open').forEach(function (item) {
            if (except && item === except) return;
            item.classList.remove('open');
            const link = item.querySelector(':scope > a');
            if (link) link.setAttribute('aria-expanded', 'false');
        });
    }

    function closeMobileMenu() {
        if (isMobileMenu()) {
            itens.classList.remove('open');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            const willOpen = !itens.classList.contains('open');
            itens.classList.toggle('open', willOpen);
            menuToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            menuToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
            if (!willOpen) closeAllDropdowns();
        });
    }

    dropdownLinks.forEach(function (link) {
        const parent = link.parentElement;
        const submenu = parent ? parent.querySelector(':scope > .submenu') : null;
        if (!parent || !submenu) return;

        link.setAttribute('aria-expanded', 'false');

        link.addEventListener('click', function (event) {
            if (!isMobileMenu()) return;

            event.preventDefault();
            const willOpen = !parent.classList.contains('open');
            closeAllDropdowns(parent);
            parent.classList.toggle('open', willOpen);
            link.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    document.addEventListener('click', function (event) {
        if (!isMobileMenu()) return;
        const clickedToggle = event.target.closest('#menu-toggle');
        const clickedInsideMenu = event.target.closest('menu');
        if (clickedToggle) return;
        if (!clickedInsideMenu) {
            closeMobileMenu();
            closeAllDropdowns();
        }
    });

    window.addEventListener('resize', function () {
        if (!isMobileMenu()) {
            closeMobileMenu();
            closeAllDropdowns();
        }
    });
});
