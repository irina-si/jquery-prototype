const removeFuncDependsOnSelector = (element, selector) => {
    if (selector === undefined) {
        element.remove();
    } else {
        if (element.matches(selector)) {
            element.remove(); 
        }
    }
}

export default function removeJQ(selector) {
    if (this.length === undefined) {
        removeFuncDependsOnSelector(this, selector);
    } else {
        for (let oneElement of this) {
            removeFuncDependsOnSelector(oneElement, selector);
        }
    }
}

