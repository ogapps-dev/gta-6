// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Countdown timer
function updateCountdown() {
    const eventDate = new Date('2026-08-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
    }
}

updateCountdown();
setInterval(updateCountdown, 60000);

// Access verification
function verifyAccess() {
    const accessCode = document.getElementById('access-code').value.trim().toUpperCase();
    const validCode = 'GTA6-LAUNCH';

    if (accessCode === validCode) {
        document.getElementById('access-form').style.display = 'none';
        document.getElementById('access-success').classList.add('active');
        
        setTimeout(() => {
            document.getElementById('notice').scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    } else {
        alert('Invalid access code. Please check and try again.');
        document.getElementById('access-code').focus();
    }
}

// Hint popup
function openHint() {
    document.getElementById('hint-popup').classList.add('active');
}

function closeHint() {
    document.getElementById('hint-popup').classList.remove('active');
}

function closeHintOnBackground(event) {
    if (event.target.id === 'hint-popup') {
        closeHint();
    }
}

// Continue to partner
function continueToPartner() {
    alert('Thank you for your interest! You will be redirected to our partner page.');
    window.location.href = '#';
}

// Smooth scroll for mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle Enter key in access code input
document.getElementById('access-code')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verifyAccess();
    }
});
