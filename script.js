document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    // abre/fecha menu mobile
    menuBtn?.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // fecha ao rolar a página
    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
    });

    // fecha ao clicar em qualquer link do menu
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

});