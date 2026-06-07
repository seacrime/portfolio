// js/pdf.js
(function() {
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const originalTitle = document.title;
            document.title = "Anna_Volkova_Resume";
            window.print();
            document.title = originalTitle;
        });
    }
    // Additional print styles will hide unnecessary elements during print
    const style = document.createElement('style');
    style.textContent = `@media print { .header, .footer, #contact, .hero-buttons, .icon-btn, .mobile-menu-btn, .header-controls, .contact-form, .contact-info { display: none; } body { margin:0; padding:1cm; } .section { break-inside: avoid; } }`;
    document.head.appendChild(style);
})();