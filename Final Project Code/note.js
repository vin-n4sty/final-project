const darkishbutton = document.querySelector('#darkish-button');
const lightishbutton = document.querySelector("#lightish-button");

function switchDarkish() {
  document.body.style.backgroundColor = '#1a1818';
  document.body.style.color = '#ece7e1';
}

function switchLightish() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = '#ece7e1';
}

darkishbutton.addEventListener("click", switchDarkish);
lightishbutton.addEventListener("click", switchLightish);