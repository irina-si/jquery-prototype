// import modules
import css from './modules/css.js';

//  New methods of Element object
Element.prototype.css = css;
NodeList.prototype.css = css;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

function returnColor() {
    const red = 'red';
    const yellow = 'yellow';
    return yellow;
}

element1.css({"font-size": "28px"});
document.querySelectorAll('li').css('list-style-type', 'square');
element2.css('text-transform', 'uppercase');
console.log(window.getComputedStyle(element2));
console.log(document.querySelectorAll('div').css(['background-color', 'text-tranform']));
console.log(element2.css(['background-color', 'text-transform']));
element3.css('color', returnColor);
