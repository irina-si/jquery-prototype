// import modules
import appendJQ from './modules/append.js'

//  New methods of Element and Node objects
Element.prototype.appendJQ = appendJQ;
NodeList.prototype.appendJQ = appendJQ;

// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';

function returnClass() {
    const red = 'red';
    const yellow = 'yellow';
    const orangeText = 'orange-text';
    return orangeText + " " + yellow;
}

element1.appendJQ(returnClass);
body.appendJQ(element1);
element3.appendJQ(['yellow', '<b>blue</b>'])
document.querySelectorAll('div').appendJQ('FORALL', 'FORALL2');
