export function css(propertyName, optionalValue) {
    
    function getPropertyNameValue(propertyName) {
        if (this.length === undefined) {                 
            return window.getComputedStyle(this)[propertyName];
        } else {
            for (let element of this) {
                let propertyNameValue = window.getComputedStyle(element)[propertyName];
                if (propertyNameValue) {
                    return propertyNameValue;
                }
            }
        };  
    }

    function getPropertyNameValuesObject(propertyNameArray) {
        let valuesObj = {};  
        if (this.length === undefined) {
            for (let propName of propertyNameArray) {
                valuesObj[propName] = window.getComputedStyle(this)[propName];
            }  
        } else {
            for (let propName of propertyNameArray) {
                valuesObj[propName] = window.getComputedStyle(this[0])[propName];
            } 
        }   
        return valuesObj;   
    } 

    function addValue(propertyName, optionalValue) {
        if (this.length === undefined) {
            this.style[propertyName] = optionalValue; 
        } else {
            for (let element of this) {
                element.style[propertyName] = optionalValue;  
            }
        }   
    }

    function setPropertiesFromObject(properties) {
        for (let property in properties) {
            if (properties.hasOwnProperty(property)) {
                addValue.call(this, property, properties[property]);
            }
        }
    }
    
    if (optionalValue === undefined) {
        switch (typeof propertyName) {
            case 'string':
                return getPropertyNameValue.call(this, propertyName);
            case 'object':
                if (!Array.isArray(propertyName)) {
                    setPropertiesFromObject.call(this, propertyName);
                } else {
                    return getPropertyNameValuesObject.call(this, propertyName);
                }
            default:
                return;
        }
    } else {
        switch (typeof optionalValue) {
            case 'string':
                addValue.call(this, propertyName, optionalValue);
                break;
            case 'function':
                addValue.call(this, propertyName, optionalValue());
                break;
            default:
                return;
            }
        }
}
