const darkbutton = document.querySelector('#dark-button');
const lightbutton = document.querySelector("#light-button");

function switchDark() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchLight() {
  document.body.style.backgroundColor = '#ece7e1';
  document.body.style.color = 'black';
}

darkbutton.addEventListener("click", switchDark);
lightbutton.addEventListener("click", switchLight);
