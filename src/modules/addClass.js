export function addClass(addClassAttr) {

    function addClassString(className) {
        setClassAttribute.call(this, previousClasses + " " + className);
    }

    function addClassArray(classNames) {
        setClassAttribute.call(this, previousClasses + " " + classNames.join(" "));
    }

    function addClassFunction(functionClass) {
        addClassDependsOnAttribute.call(this, functionClass());
    }   

    function addClassDependsOnAttribute(classAttr) {
        switch (typeof classAttr) {
            case 'string':
                addClassString.call(this, classAttr);
                break;
            case 'object':
                if (!Array.isArray(classAttr)) return;
                addClassArray.call(this, classAttr);
                break;
            case 'function':
                addClassFunction.call(this, classAttr);
                break;
            default:
                return;
        }
    }

    function setClassAttribute(classString) {
        this.setAttribute('class', classString);
    }

    let previousClasses = '';

    if (this.length === undefined) {
        if (!this.hasAttribute('class')) {
            this.setAttribute('class', '');
        }
        previousClasses = this.getAttribute('class');
        addClassDependsOnAttribute.call(this, addClassAttr);
    } else {
        for (let element of this) {
            if (!element.hasAttribute('class')) {
                element.setAttribute('class', '');
            }
            previousClasses += element.getAttribute('class') + ' ';
            addClassDependsOnAttribute.call(element, addClassAttr);
            previousClasses = '';
        }
    }  
}