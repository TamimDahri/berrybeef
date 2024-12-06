document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').prepend(navToggle);

    navToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation (Placeholder)
    const signupBtn = document.querySelector('.signup-btn');
    signupBtn.addEventListener('click', () => {
        alert('Signup functionality to be implemented');
    });

    // Newsletter Signup (Future Implementation)
    const ctaBtn = document.querySelector('.cta-btn');
    ctaBtn.addEventListener('click', () => {
        const email = prompt('Enter your email for our newsletter:');
        if (email) {
            alert('Thank you for subscribing!');
        }
    });
});