// import modules
import attr from './modules/attr.js';


//  New methods of Element and NodeList objects
Element.prototype.attr = attr;
NodeList.prototype.attr = attr;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';

let value = {style: 'background-color:blue;'};
element1.attr(value);
element2.attr('style', () => 'text-transform: uppercase;');
console.log(document.querySelectorAll('.yellow').attr('id'));
document.querySelectorAll('.yellow').attr('id');
document.querySelectorAll('div').attr({style: 'margin:25px;'});


