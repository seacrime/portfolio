(function() {
    const elements = document.querySelectorAll('[data-en][data-ru]');
    let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('ru') ? 'ru' : 'en');
    const langToggle = document.getElementById('langToggle');
    const langSpan = document.getElementById('langLabel');

    function updateLanguage(lang) {
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else {
                    el.innerText = text;
                }
            }
        });
    
        if (langSpan) langSpan.innerText = lang.toUpperCase();
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    function toggleLang() {
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        updateLanguage(newLang);
    }

    if (langToggle) langToggle.addEventListener('click', toggleLang);
    updateLanguage(currentLang);
})();
