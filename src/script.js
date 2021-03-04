// import modules
import {empty} from './modules/empty.js';

//  New methods of Element and Node objects
Element.prototype.empty = empty;
NodeList.prototype.empty = empty;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

document.querySelectorAll('li').empty();
element1.empty();
