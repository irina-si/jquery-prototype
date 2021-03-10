// import modules
import clickJQ from './modules/click.js';
import text from './modules/text.js';
import css from './modules/css.js';
import addClass from './modules/addClass.js';

//  New methods of Element and Node objects
Element.prototype.clickJQ = clickJQ;
Node.prototype.text = text;
Element.prototype.text = text;
Element.prototype.css = css;
Element.prototype.addClass = addClass;

NodeList.prototype.clickJQ = clickJQ;
NodeList.prototype.text = text;
NodeList.prototype.css = css;
NodeList.prototype.addClass = addClass;

// Testing
const body = document.body;

let element1 = document.querySelector('#one');
let element2 = document.querySelector('#two');
let element3 = document.querySelector('#three');
function returnColor() {
    const red = 'red';
    const yellow = 'yellow';
    return yellow;
}

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
element3.css('color', returnColor);

//addClass-feature
element1.addClass('red orange-text');
element2.addClass(['red', 'orange-text'])
element3.addClass(returnClass);
document.querySelector('div').addClass('yellow');
console.log(one.classList.value);
console.log(two.classList.value);
function returnClass() {
    const red = 'red';
    const yellow = 'yellow';
    const orangeText = 'orange-text';
    return orangeText + " " + yellow;
}