export function addClassWithClassList(addClassAttr) {

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


export function addClass(addClassAttr) {

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