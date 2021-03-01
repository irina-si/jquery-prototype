export function removeClass(classAttr) {

    function removeClassString(className) {
        for (let classItem of className.split(" ")) {
            classList.forEach((item, index) => {
                if (item === classItem) {
                    classList[index] = "";
                }
            });
        }
        setClassAttribute(classList.join(' '));
    }

    function removeClassArray(classNames) {
        for (let classItem of classNames) {
            classList.forEach((item, index) => {
                if (item === classItem) {
                    classList[index] = "";
                }
            });
        }
        setClassAttribute(classList.join(' '));
    }

    function removeClassFunction(functionClass) {
        removeClassDependsOnAttribute(functionClass());
    }   

    function removeClassDependsOnAttribute(classAttr) {
        switch (typeof classAttr) {
            case 'string':
                removeClassString(classAttr);
                break;
            case 'object':
                if (!Array.isArray(classAttr)) return;
                removeClassArray(classAttr);
                break;
            case 'function':
                removeClassFunction(classAttr);
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

    const classList = element.getAttribute('class').split(' ');

    removeClassDependsOnAttribute(classAttr);
}