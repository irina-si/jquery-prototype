// import modules
import {removeJQ} from './modules/remove.js';


//  New methods of Node object
Node.prototype.removeJQ = removeJQ;


// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';

element1.removeJQ();
document.removeJQ('.yellow');
