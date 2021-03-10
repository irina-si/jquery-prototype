const setClassAttribute = (element, classString) => {
    element.setAttribute('class', classString);
}

const setNewClassAttr = (element, classNames) => {
    let classList = (element.getAttribute("class") || '').split(' ');
    for (let classItemToDelete of classNames) {
            classList.forEach((item, index) => {
                if (item === classItemToDelete) {
                    classList[index] = "";
                }
            })
        }
    setClassAttribute(element, classList.join(' '));
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