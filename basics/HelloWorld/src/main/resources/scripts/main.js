/**
 * Created by HP on 7/24/2017.
 */

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
if(myHeading.textContent === 'Hello World!'){
  alert('Yeah, that is hello world');
} else {
  alert('Nooo, come on!');
}
document.querySelector('html').onclick = function () {
  alert('Ouch! Stop poking me!')
}