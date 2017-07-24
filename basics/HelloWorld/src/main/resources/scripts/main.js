/**
 * Created by HP on 7/24/2017.
 */

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World! click on photo to change it.';
if (myHeading.textContent === 'Hello World! click on photo to change it.') {
  alert('Yeah, that is hello world');
} else {
  alert('Nooo, come on!');
}

document.querySelector('html').onclick = function () {
  alert('Ouch! Stop poking me!')
}

var myImage = document.querySelector('img');
myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/1.jpg') {
    myImage.setAttribute('src', 'images/2.jpg');
  } else {
    myImage.setAttribute('src', 'images/1.jpg');
  }
}

var myButton = document.querySelector('button');
var myH2 = document.querySelector('h2');

function setName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myH2.textContent = 'Special Hello to you, ' + myName;
}

if(!localStorage.getItem('name')){
  setName();
} else {
  var storedName = localStorage.getItem('name');
  myH2.textContent = 'Special Hello to you, ' + storedName;
}

myButton.onclick = function () {
  setName();
}
