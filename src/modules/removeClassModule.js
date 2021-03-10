const setClassAttribute = (element, classString) => {
    element.setAttribute('class', classString);
}

const setNewClassAttr = (element, classNames) => {
    let classList = (element.getAttribute("class") || '').split(' ');
    let newClassList = classList.filter(name => !classNames.includes(name)).join(' ');
    setClassAttribute(element, newClassList);
}

const removeClassFunction = (element, functionClass) => {
    removeClassDependsOnAttribute(element, functionClass());
}  

const removeClassDependsOnAttribute = (element, classAttr) => {
    switch (typeof classAttr) {
        case 'string':
            setNewClassAttr(element, classAttr.split(' '));
            break;
        case 'object':
            if (!Array.isArray(classAttr)) return;
            setNewClassAttr(element, classAttr);
            break;
        case 'function':
            removeClassFunction(element, classAttr);
            break;
        default:
            return;
    }
}

export default function removeClass(classAttr) {
    if (this.length === undefined) {
        removeClassDependsOnAttribute(this, classAttr);
      } else {
        for (let element of this) {
            removeClassDependsOnAttribute(element, classAttr);
        }
      }    
}