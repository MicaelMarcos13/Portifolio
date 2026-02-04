const navbar = document.querySelector('.navbar');
const navbarMobile = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', () => {
    navbarMobile.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active');
});
