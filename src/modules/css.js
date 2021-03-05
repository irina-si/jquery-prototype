const getPropertyNameValue = (element, propertyName) => {
    if (element.length === undefined) {                 
        return window.getComputedStyle(element)[propertyName];
    } else {
        for (let item of element) {
            let propertyNameValue = window.getComputedStyle(item)[propertyName];
            if (propertyNameValue) {
                return propertyNameValue;
            }
        }
    };  
}

const getPropertyNameValuesObject = (element, propertyNameArray) => {
    let valuesObj = {};  
    if (element.length === undefined) {
        for (let propName of propertyNameArray) {
            valuesObj[propName] = window.getComputedStyle(element)[propName];
        }  
    } else {
        for (let propName of propertyNameArray) {
            valuesObj[propName] = window.getComputedStyle(element[0])[propName];
        } 
    }   
    return valuesObj;   
} 

const addValue = (element, propertyName, optionalValue) => {
    if (element.length === undefined) {
        element.style[propertyName] = optionalValue; 
    } else {
        for (let item of element) {
            item.style[propertyName] = optionalValue;  
        }
    }   
}

const setPropertiesFromObject = (element, properties) => {
    for (let property in properties) {
        if (properties.hasOwnProperty(property)) {
            addValue(element, property, properties[property]);
        }
    }
}

const functionDependsOnPropertyNameType = (element, propertyName) => {
    switch (typeof propertyName) {
        case 'string':
            return getPropertyNameValue(element, propertyName);
        case 'object':
            if (!Array.isArray(propertyName)) {
                setPropertiesFromObject(element, propertyName);
            } else {
                return getPropertyNameValuesObject(element, propertyName);
            }
        default:
            return;
    }
}

const functionDependsOnOptionalValueType = (element, propertyName, optionalValue) => {
    switch (typeof optionalValue) {
        case 'string':
            addValue(element, propertyName, optionalValue);
            break;
        case 'function':
            addValue(element, propertyName, optionalValue());
            break;
        default:
            return;
        }
}

export default function css(propertyName, optionalValue) {
    return (optionalValue === undefined) ? functionDependsOnPropertyNameType(this, propertyName) 
                                         : functionDependsOnOptionalValueType(this, propertyName, optionalValue);
}
