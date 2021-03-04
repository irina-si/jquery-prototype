// import modules
import {addClass} from './modules/addClass.js';

//  New methods of Element and NodeList objects
Element.prototype.addClass = addClass;
NodeList.prototype.addClass = addClass;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

element1.addClass('red orange-text');
element2.addClass(['red', 'orange-text'])
element3.addClass(returnClass);

function returnClass() {
    const red = 'red';
    const yellow = 'yellow';
    const orangeText = 'orange-text';
    return orangeText + " " + yellow;
}

document.querySelector('div').addClass('yellow');
console.log(one.classList);
console.log(two.classList);