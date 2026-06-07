// js/theme.js - ИСПРАВЛЕННАЯ ВЕРСИЯ
(function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        }
    }

    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        // Проверяем системные настройки
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    // Применяем тему при загрузке
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);

    // Обработчик кнопки переключения
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isDark = body.classList.contains('dark-mode');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // Слушаем изменение системной темы (если пользователь не выбрал вручную)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    console.log('Theme initialized, current:', body.classList.contains('dark-mode') ? 'dark' : 'light');
})();