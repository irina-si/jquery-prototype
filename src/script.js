// Functions Declarations

function addClass(addClassAttr) {

    function addClassString(className) {
        let classes = className.split(" ");
        element.classList.add(...classes);
    }

    function addClassArray(classNames) {
        element.classList.add(...classNames);
    }

    function addClassFunction(functionClass) {
        addClassDependsOnAttribute(functionClass());
    }   

    function addClassDependsOnAttribute(classAttr) {
        switch (typeof classAttr) {
            case 'string':
                addClassString(classAttr);
                break;
            case 'object':
                if (!Array.isArray(classAttr)) return;
                addClassArray(classAttr);
                break;
            case 'function':
                addClassFunction(classAttr);
                break;
            default:
                return;
        }
    }

    let element = this;

    addClassDependsOnAttribute(addClassAttr);
    
}

// getAttribute

function addClass2(addClassAttr) {

    function addClassString(className) {
        setClassAttribute(previousClasses + " " + className);
    }

    function addClassArray(classNames) {
        setClassAttribute(classNames.join(" "));
    }

    function addClassFunction(functionClass) {
        addClassDependsOnAttribute(functionClass());
    }   

    function addClassDependsOnAttribute(classAttr) {
        switch (typeof classAttr) {
            case 'string':
                addClassString(classAttr);
                break;
            case 'object':
                if (!Array.isArray(classAttr)) return;
                addClassArray(classAttr);
                break;
            case 'function':
                addClassFunction(classAttr);
                break;
            default:
                return;
        }
    }

    function setClassAttribute(classString) {
        element.setAttribute('class', classString);
    }

    const element = this;

    if (!element.hasAttribute('class')) {
        element.setAttribute('class', '');
    }

    const previousClasses = element.getAttribute('class');

    addClassDependsOnAttribute(addClassAttr);
    
}

//  New methods of Element object
Element.prototype.addClass = addClass;
Element.prototype.addClass2 = addClass2;


// Testing
const body = document.body;
let element1 = body.firstElementChild;
let element2 = body.lastElementChild.previousElementSibling;
let element3 = element1.nextElementSibling;
element1.addClass2('red orange-text');
element2.addClass2(['red', 'orange-text'])
element3.addClass2(returnClass);

function returnClass() {
    const red = 'red';
    const yellow = 'yellow';
    const orangeText = 'orange-text';
    return orangeText + " " + yellow;
}

