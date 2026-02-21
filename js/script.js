function mudouTamanho() {
    const itens = document.getElementById('itens');
    if (!itens) return;

    // Mantem o menu visivel em qualquer tamanho de tela.
    itens.style.display = '';
}

// Mantem compatibilidade com o nome usado no HTML.
function mudoutamanho() {
    mudouTamanho();
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.menu-dropdown > a');
    if (!dropdownLinks.length) return;

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
        const clickedInsideMenu = event.target.closest('menu');
        if (!clickedInsideMenu) closeAllDropdowns();
    });

    window.addEventListener('resize', function () {
        if (!isMobileMenu()) closeAllDropdowns();
    });
});
