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

// Creating a date obj
function currentDate() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  return dateTime
}
// Setting the yahoo finance API request
// Setting the API key
const configuration = {
  method: 'GET',
  headers: {
    'x-api-key': 'wb62oKe7T7X1lmjqff5a8s4WorS5h5cazj2TlhZh'
  }
}

// Event handler
function updateDolar(event) {
  let elementId = (event.target.dataset.id);
  event.preventDefault();
  fetch('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=BRL%3DX%2C%5EIXIC%2C%5EGSPC%2C%5EBVSP%2C%5EVIX%2CBTC-USD', configuration)
    .then(response => response.json())
    .then(data => {
      let dolarObj = data.quoteResponse.result[elementId];
      // Get the elements to change it
      document.querySelector('.asset').innerHTML = dolarObj.shortName;
      document.querySelector('.time').innerHTML = currentDate();
      document.querySelector('.dif').innerHTML = dolarObj.regularMarketChange;
      document.querySelector('.perc-diff').innerHTML = `${dolarObj.regularMarketChangePercent}%`;
      document.querySelector('.price').innerHTML = dolarObj.regularMarketPrice;
    })
}

const navButtons = document.querySelectorAll(".nav-link");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', updateDolar);
}