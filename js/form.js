// js/form.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');

    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }
    function validateEmail(email) {
        return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
    }
    function clearErrors() {
        [nameError, phoneError, emailError, messageError].forEach(e => e.innerText = '');
    }
    function validateForm() {
        let valid = true;
        clearErrors();
        if (!nameInput.value.trim()) {
            nameError.innerText = currentLang === 'ru' ? 'Введите имя' : 'Name required';
            valid = false;
        }
        if (!validatePhone(phoneInput.value.trim())) {
            phoneError.innerText = currentLang === 'ru' ? 'Введите корректный телефон (например +7 999 1234567)' : 'Valid phone required (e.g. +7 999 1234567)';
            valid = false;
        }
        if (!validateEmail(emailInput.value.trim())) {
            emailError.innerText = currentLang === 'ru' ? 'Введите корректный email' : 'Valid email required';
            valid = false;
        }
        if (!messageInput.value.trim()) {
            messageError.innerText = currentLang === 'ru' ? 'Введите сообщение' : 'Message required';
            valid = false;
        }
        return valid;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const formData = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
            date: new Date().toISOString()
        };
        formStatus.innerText = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
        // Mock successful send (you can replace with Google Sheets script)
        setTimeout(() => {
            formStatus.innerHTML = `<span style="color: #10b981">✓ ${currentLang === 'ru' ? 'Сообщение отправлено (демо)' : 'Message sent (demo)'}</span>`;
            form.reset();
            setTimeout(() => formStatus.innerHTML = '', 3000);
        }, 800);

        // Example Google Sheets fetch (optional - uncomment with your script URL)
        /*
        try {
            await fetch('https://script.google.com/macros/s/YOUR_ID/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(formData)
            });
        } catch(err) { console.warn(err); }
        */
    });
    let currentLang = localStorage.getItem('lang') || 'en';
});