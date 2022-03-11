console.log('Im live!')
// Setting the hamburguer menu
// Event handler
function menuTog(event) {
  event.preventDefault();
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}
// Event listener
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navLink = document.querySelectorAll('.nav-link')

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);
navLink.forEach((link) => {
  link.addEventListener('click', menuTog)
})




