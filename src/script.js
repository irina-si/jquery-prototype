// import modules
import {addClassWithClassList} from './modules/addClassModule.js';
import {addClass} from './modules/addClassModule.js';

//  New methods of Element object
Element.prototype.addClass = addClass;
Element.prototype.addClassWithClassList = addClassWithClassList;

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

