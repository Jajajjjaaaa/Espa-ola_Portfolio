//* Script * //

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
       
        navLinks.classList.remove('active');
    });
});


const elements = document.querySelectorAll('.about-img, .about-text, .contact-info, .contact-form, .skill-card, .hero-title, .hero-description');

const animateOnScroll = () => {
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};


window.addEventListener('scroll', animateOnScroll);

animateOnScroll();
