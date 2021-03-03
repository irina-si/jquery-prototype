export function text(optionalArg) {

    function textWithoutArguments() {
       if (this.length === undefined) {                 // проверяю, является ли this коллекцией
            return this.textContent;
        } else {
            let textString = '';
            for (let element of this) {
                textString += ' ' + element.textContent;
            }
            return textString;
        };    
    }
    
    function textWithArguments(text) {
        function stringifyArg(text) {
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

        const newText = document.createTextNode(stringifyArg(text));
        if (this.length === undefined) {                    // проверяю, является ли this коллекцией
            this.innerHTML = newText.data;
        } else {
            for (let element of this) {
                element.innerHTML = newText.data;
            }
        }; 
    }

    return (!optionalArg) ? textWithoutArguments.call(this) : textWithArguments.call(this, optionalArg);

}