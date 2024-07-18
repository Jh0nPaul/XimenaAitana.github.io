// Animación al cargar la página
window.addEventListener('load', () => {
    document.querySelector('body').classList.add('animacion-carga');
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.animacion-scroll');
    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});