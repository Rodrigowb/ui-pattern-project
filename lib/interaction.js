// Setting the hamburguer menu
// Event listener
const menuOpen = document.querySelector('.menu-open');
console.log(menuOpen);
const menuClose = document.querySelector('.menu-close');
console.log(menuClose);
const nav = document.querySelector('.nav');
console.log(nav);
let h = document.querySelector('h1');
console.log(h);

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);
// Vent handler
function menuTog(event) {
  event.preventDefault();
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}


