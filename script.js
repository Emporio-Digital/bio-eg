document.addEventListener('DOMContentLoaded', () => {
    
    // Animação de entrada
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Removi a lógica do Modal pois nesta versão da Bio não teremos ebooks.
    // O código ficou limpo apenas com a animação de entrada.
});