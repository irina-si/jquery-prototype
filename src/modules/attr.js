const getAttributeNameValue = (element, attrName) => {
    if (element.length === undefined) {                 
        return element.getAttribute(attrName);
    } else {
        for (let item of element) {
            if (item.hasAttribute(attrName)) {
                return item.getAttribute(attrName);
            };
        }
    };  
}

const addAttributesFromObject = (element, attributes) => {
    for (let attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            element.setAttribute(attr, attributes[attr]);
        }
    }
}

const addAttribute = (element, attributeName, value) => {
    element.setAttribute(attributeName, value);
}

const addAttributeFromFunction = (element, attributeName, func) => {
    element.setAttribute(attributeName, func());
}

const dependsOnAttributeType = (element, attribute) => {
    switch (typeof attribute) {
        case 'string':
            return getAttributeNameValue(element, attribute);
        case 'object':
            if (element.length === undefined) {
                addAttributesFromObject(element, attribute);
            } else {
                for (let item of element) {
                    addAttributesFromObject(item, attribute);
                }
            }
            break;
        default:
            return;
    }
}

const dependsOnOptionalValueType = (element, attribute, optionalValue) => {
    switch (typeof optionalValue) {
        case 'string':
            addAttribute(element, attribute, optionalValue);
            break;
        case 'function':
            addAttributeFromFunction(element, attribute, optionalValue);
            break;
        default:
            return;
    }
}

export function attr(attribute, optionalValue) {
    if (optionalValue === undefined) {
        return dependsOnAttributeType(this, attribute);
    } else {
        if (this.length === undefined) {
            dependsOnOptionalValueType(this, attribute, optionalValue);
        } else {
            for (let item of this) {
                dependsOnOptionalValueType(item, attribute, optionalValue);
            }
        }
        
    }
}