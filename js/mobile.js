// js/mobile.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => mobileNav.classList.remove('open'));
        });
    }
});