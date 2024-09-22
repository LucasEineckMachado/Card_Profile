const themeToggle = document.getElementById('themeToggle');
const profileCard = document.getElementById('profileCard');

themeToggle.addEventListener('click', () => {
    profileCard.classList.toggle('dark-mode');
});

const icons = document.querySelectorAll('.social-icons a');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('clicked');
        setTimeout(() => {
            icon.classList.remove('clicked');
        }, 300);
    });
});
