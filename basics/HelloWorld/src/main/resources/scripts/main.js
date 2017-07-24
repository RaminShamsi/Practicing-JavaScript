/**
 * Created by HP on 7/24/2017.
 */

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
if (myHeading.textContent === 'Hello World!') {
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