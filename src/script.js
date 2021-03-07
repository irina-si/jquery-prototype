// import modules
import childrenJQ from './modules/children.js';

//  New methods of Element and Node objects
Element.prototype.childrenJQ = childrenJQ;
NodeList.prototype.childrenJQ = childrenJQ;

// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

console.log(document.querySelectorAll('ul').childrenJQ());
console.log(document.querySelectorAll('ul').childrenJQ('.koko'));
