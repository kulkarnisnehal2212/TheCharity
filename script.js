let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();
initScrollAnimations();

function plusSlides(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Add smooth transition effect
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.transform = "scale(1.1)";
    }

    // Smooth entrance for active slide
    setTimeout(() => {
        slides[slideIndex - 1].classList.add("active");
        slides[slideIndex - 1].style.transform = "scale(1)";
    }, 100);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3500);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.icon-box, .welcome, .aboutlines');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Enhanced button interactions
function addButtonAnimations() {
    const buttons = document.querySelectorAll('.Donate, .Read, .welcomebutton');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Initialize enhanced interactions
    addButtonAnimations();
    
    // Add smooth loading animation to page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});


