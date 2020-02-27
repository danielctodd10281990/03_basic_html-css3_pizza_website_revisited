var about = document.querySelector('#about');
var order = document.querySelector('#order');
var menu = document.querySelector('#menu');
var menuList = document.querySelector('.menu-list');
var backdrop = document.querySelector('.backdrop');
var navBarSeparation = document.querySelectorAll('.nav-bar-separation');

about.addEventListener('mouseover', aboutShowBorder);
about.addEventListener('mouseout', aboutHideBorder);

order.addEventListener('mouseover', orderShowBorder);
order.addEventListener('mouseout', orderHideBorder);

menu.addEventListener('mouseover', menuShowBorder);
menu.addEventListener('mouseout', menuHideBorder);
menu.addEventListener('click', menuOpen);

menuList.addEventListener('click', menuClose);
backdrop.addEventListener('click', menuClose);

// Functions to either show border top and bottom or remove them for about nav link.
// Shows top and bottom if mouse is over.
function aboutShowBorder() {
  for (var i = 0; i < 2; i++) {
    navBarSeparation[i].style.display = 'none';
  }
  about.style.border = "3px solid aliceblue";
  about.style.padding = '0.2rem 4rem';
}

function aboutHideBorder() {
  for (var i = 0; i < 2; i++) {
    navBarSeparation[i].style.display = 'inline-block';
  }
  about.style.border = "none";
  about.style.padding = '0.2rem 3.75rem';
}

// Functions to either show border top and bottom or remove them for order nav link.
// Shows top and bottom if mouse is over.
function orderShowBorder() {
  for (var i = 2; i < 4; i++) {
    navBarSeparation[i-1].style.display = 'none';
  }
  order.style.border = "3px solid aliceblue";
  order.style.padding = '0.2rem 4rem';
}

function orderHideBorder() {
  for (var i = 2; i < 4; i++) {
    navBarSeparation[i-1].style.display = 'inline-block';
  }
  order.style.border = "none";
  order.style.padding = '0.2rem 3.75rem';
}

// Functions to either show border top and bottom or remove them for about menu link.
// Shows top and bottom if mouse is over.
function menuShowBorder() {
  for (var i = 4; i < 6; i++) {
    navBarSeparation[i-2].style.display = 'none';
  }
  menu.style.border = "3px solid aliceblue";
  menu.style.padding = '0.2rem 4rem';
}

function menuHideBorder() {
  for (var i = 4; i < 6; i++) {
    navBarSeparation[i-2].style.display = 'inline-block';
  }
  menu.style.border = "none";
  menu.style.padding = '0.2rem 3.75rem';
}

function menuOpen() {
  menuList.style.display = 'block';
  backdrop.style.display = 'block';
}

function menuClose() {
  menuList.style.display = 'none';
  backdrop.style.display = 'none';
}