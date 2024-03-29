document.addEventListener('DOMContentLoaded', function() {
    const plusIcons = document.querySelectorAll('.las.la-plus');
    
    plusIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const answer = this.parentElement.querySelector('.answer');
            answer.classList.toggle('show');
        });
    });
});
