// import modules
import text from './modules/text.js';


//  New methods of Element object
Node.prototype.text = text;
NodeList.prototype.text = text;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';

let i = element1.text();
let d = document.querySelectorAll('div').text();

console.log('element1 ' + i);
console.log('all divs ' + d);

element3.text(true);
document.querySelectorAll('.red').text('HELLO'); 

