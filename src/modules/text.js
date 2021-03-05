const textWithoutArguments = (element) => {
    if (element.length === undefined) {                 
         return element.textContent;
     } else {
         let textString = '';
         for (let item of element) {
             textString += ` ${item.textContent}`
         }
         return textString;
     };    
}

const textWithArguments = (element, text) => {
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
    let stringText = '';
    switch (typeof text) {
        case "string":
            stringText = text;
            break;
        case "boolean":
        case "number":
            stringText = String(text);
            break;
        case "function":
            stringText = String(text());
            break;
        default:
            return;
    }
    return stringText;
}

export default function text(optionalArg) {
    return (!optionalArg) ? textWithoutArguments(this) : textWithArguments(this, optionalArg);
}