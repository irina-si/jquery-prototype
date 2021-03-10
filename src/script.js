// import modules
import removeClass from './modules/removeClassModule.js';

//  New methods of Element object
Element.prototype.removeClass = removeClass;
NodeList.prototype.removeClass = removeClass;

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
    return orangeText + " " + red;
}

element3.removeClass(returnClass);
element1.removeClass(['red', 'orange-text']);
document.querySelectorAll('div').removeClass('yellow');




