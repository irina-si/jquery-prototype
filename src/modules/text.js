const getTextWithoutArguments = (element) => {
    if (element.length === undefined) {                 
         return element.textContent;
     } else {
        return Array.from(element).map(item => item.textContent).join(' ')
     };    
}

const getTextWithArguments = (element, text) => {
    const newText = document.createTextNode(stringifyArg(text));
    if (element.length === undefined) {                  
        element.innerHTML = newText.data;
    } else {
        for (let item of element) {
            item.innerHTML = newText.data;
        }
    }; 
}

const stringifyArg = (text) => {
    switch (typeof text) {
        case "string":
            return text;
        case "boolean":
        case "number":
            return String(text);
        case "function":
            return String(text());
        default:
            return;
    }
}

export default function text(optionalArg) {
    return (!optionalArg) ? getTextWithoutArguments(this) : getTextWithArguments(this, optionalArg);
}
