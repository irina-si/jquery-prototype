// import modules
import {css} from './modules/css.js';

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
console.log(document.querySelectorAll('div').css(['background-color', 'text-tranform']));
element3.css('color', returnColor);
