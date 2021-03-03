export function attr(attribute, optionalValue) {

    function getAttributeNameValue(attrName) {
        if (this.length === undefined) {                 // проверяю, является ли this коллекцией
            return this.getAttribute(attrName);
        } else {
            for (let element of this) {
                if (element.hasAttribute(attrName)) {
                    return element.getAttribute(attrName);
                };
            }
        };  
    }

    function addAttributesFromObject(attributes) {
        for (let attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                this.setAttribute(attr, attributes[attr]);
            }
        }
    }

    function addAttribute(attributeName, value) {
        this.setAttribute(attributeName, value);
    }

    function addAttributeFromFunction(attributeName, func) {
        this.setAttribute(attributeName, func());
    }

    if (optionalValue === undefined) {
        switch (typeof attribute) {
            case 'string':
                return getAttributeNameValue.call(this, attribute);
            case 'object':
                addAttributesFromObject.call(this, attribute);
                break;
            default:
                return;
        }
    } else {
        switch (typeof optionalValue) {
            case 'string':
                addAttribute.call(this, attribute, optionalValue);
                break;
            case 'function':
                addAttributeFromFunction.call(this, attribute, optionalValue);
                break;
            default:
                return;
        }
    }
}