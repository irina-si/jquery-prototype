// import modules
import removeClass from './modules/removeClassModule.js';
import empty from './modules/empty.js';
import removeJQ from './modules/remove.js';
import childrenJQ from './modules/children.js';
import attr from './modules/attr.js';
import appendJQ from './modules/append.js';
import clickJQ from './modules/click.js';
import text from './modules/text.js';
import css from './modules/css.js';
import addClass from './modules/addClass.js';

// New methods of Element and Node objects
Element.prototype.removeClass = removeClass;
Element.prototype.empty = empty;
Element.prototype.childrenJQ = childrenJQ;
Element.prototype.attr = attr;
Element.prototype.appendJQ = appendJQ;
Element.prototype.clickJQ = clickJQ;
Element.prototype.text = text;
Element.prototype.css = css;
Element.prototype.addClass = addClass;

NodeList.prototype.removeClass = removeClass;
NodeList.prototype.empty = empty;
Node.prototype.removeJQ = removeJQ;
NodeList.prototype.removeJQ = removeJQ;
NodeList.prototype.childrenJQ = childrenJQ;
NodeList.prototype.attr = attr;
NodeList.prototype.appendJQ = appendJQ;
NodeList.prototype.clickJQ = clickJQ;
NodeList.prototype.text = text;
Node.prototype.text = text;
NodeList.prototype.css = css;
NodeList.prototype.addClass = addClass;

// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');

function returnClass() {
    const red = 'red';
    const yellow = 'yellow';
    const orangeText = 'orange-text';
    return orangeText + " " + red;
}


// removeclass-feature
element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';
element3.removeClass(returnClass);
element1.removeClass(['red', 'orange-text']);
document.querySelectorAll('div').removeClass('yellow');

// empty-feature
setTimeout(() => document.querySelectorAll('li').empty(), 5000);
setTimeout(() => element1.empty(), 6000);

// remove-feature
element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';
setTimeout(() => element1.removeJQ(), 12000);
setTimeout(() => document.querySelectorAll('div').removeJQ('.yellow'), 10000);

// children-feature
console.log(document.querySelectorAll('ul').childrenJQ());
console.log(document.querySelectorAll('ul').childrenJQ('.koko'));

// attr-feature
element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';
let value = {style: 'background-color:blue;'};
element1.attr(value);
element2.attr('style', () => 'text-transform: uppercase;');
console.log(document.querySelectorAll('.yellow').attr('id'));
document.querySelectorAll('.yellow').attr('id');
document.querySelectorAll('div').attr({style: 'margin:25px;'});

// append-feature
element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';
element1.appendJQ(returnClass);
body.appendJQ(element1);
element3.appendJQ(['yellow', '<b>blue</b>'])
document.querySelectorAll('div').appendJQ('FORALL', 'FORALL2');

// click-feature
element2.clickJQ(() => alert('Hello'));
setTimeout( () => element2.clickJQ(), 0);
document.querySelectorAll('div').clickJQ(() => alert('GoodBye'));
document.querySelectorAll('.colmn').clickJQ({a: 'hiFromObj'}, (event) => alert(`${event.data.a}`));

// text-feature
element1.className = 'red orange-text';
element2.className = 'red orange-text';
element3.className = 'yellow';
let i = element1.text();
let d = document.querySelectorAll('div').text();
console.log('element1 ' + i);
console.log('all divs ' + d);
element3.text(true);
document.querySelectorAll('.red').text('HELLO'); 

// css-feature
element1.css({"font-size": "28px"});
document.querySelectorAll('li').css('list-style-type', 'square');
element2.css('text-transform', 'uppercase');
console.log(window.getComputedStyle(element2));
console.log(document.querySelectorAll('div').css(['background-color', 'text-tranform']));
console.log(element2.css(['background-color', 'text-transform']));
element3.css('color', returnClass);

//addClass-feature
element1.addClass('red orange-text');
element2.addClass(['red', 'orange-text'])
element3.addClass(returnClass);
document.querySelector('div').addClass('yellow');
console.log(one.classList.value);
console.log(two.classList.value);
