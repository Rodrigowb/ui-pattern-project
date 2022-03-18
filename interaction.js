// Acessing the DOM nodes
let asset = document.querySelector('.asset')
let time = document.querySelector('.time')
let dif = document.querySelector('.dif')
let percDif = document.querySelector('.perc-diff')
let price = document.querySelector('.price')

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
const configuration = {
  method: 'GET',
  headers: {
    'x-api-key': 'wb62oKe7T7X1lmjqff5a8s4WorS5h5cazj2TlhZh'
  }
}

// Config the color of the text
function setColor(number, domNode) {
  if (number < 0) {
    domNode.style.color = "red";
  } else {
    domNode.style.color = "green"
  }
}

// Event handler: getting requests from the API
function updateIndexes(event) {
  let elementId = (event.target.dataset.id);
  event.preventDefault();
  fetch('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=BRL%3DX%2C%5EIXIC%2C%5EGSPC%2C%5EBVSP%2C%5EVIX%2CBTC-USD', configuration)
    .then(response => response.json())
    .then(data => {
      let obj = data.quoteResponse.result[elementId];
      asset.innerHTML = obj.shortName;
      time.innerHTML = currentDate();
      dif.innerHTML = obj.regularMarketChange;
      percDif.innerHTML = `${obj.regularMarketChangePercent}%`;
      price.innerHTML = obj.regularMarketPrice;
      // Set the color
      setColor(parseFloat(obj.regularMarketChangePercent), document.querySelector('.price'))
    })
}
// Event listener
const navButtons = document.querySelectorAll(".nav-link");
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', updateIndexes);
}

// Setting the landing page info (S&P 500 by default)
function landingPageInfo() {
  let elementId = 0;
  fetch('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=%5EGSPC', configuration)
    .then(response => response.json())
    .then(data => {
      let obj = data.quoteResponse.result[elementId];
      // Get the elements to change it
      asset.innerHTML = obj.shortName;
      time.innerHTML = currentDate();
      dif.innerHTML = obj.regularMarketChange;
      percDif.innerHTML = `${obj.regularMarketChangePercent}%`;
      price.innerHTML = obj.regularMarketPrice;
      // Set the color
      setColor(parseFloat(obj.regularMarketChangePercent), document.querySelector('.price'))
    })
}
landingPageInfo();