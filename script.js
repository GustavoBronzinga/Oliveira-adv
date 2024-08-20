// script.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const slideInterval = 10000; // Tempo entre as transições (em milissegundos)
    let currentSlide = 0;

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carrossel
    function moveSlide(step) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        const offset = -currentSlide * 100;
        document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
    }

    // Iniciar a rotação automática do carrossel
    function startCarousel() {
        setInterval(() => {
            moveSlide(1); // Move para o próximo slide
        }, slideInterval);
    }

    startCarousel(); // Iniciar o carrossel

    // Clonar depoimentos para o loop infinito
    const carouselWrapper2 = document.querySelector(".carousel-wrapper2");
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach((testimonial) => {
        const clone = testimonial.cloneNode(true);
        carouselWrapper2.appendChild(clone);
    });
});
