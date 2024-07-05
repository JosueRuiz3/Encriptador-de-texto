document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.container__input__texto');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});