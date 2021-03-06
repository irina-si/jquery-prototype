// import modules
import clickJQ from './modules/click.js';

//  New methods of Element and Node objects
Element.prototype.clickJQ = clickJQ;
NodeList.prototype.clickJQ = clickJQ;

// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');


element2.clickJQ(() => alert('Hello'));
setTimeout( () => element2.clickJQ(), 0);
document.querySelectorAll('div').clickJQ(() => alert('GoodBye'));
document.querySelectorAll('.colmn').clickJQ({a: 'hiFromObj'}, (event) => alert(`${event.data.a}`));
