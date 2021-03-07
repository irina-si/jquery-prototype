const addNodeDependsOnType = (element, node) => {
    switch (typeof node) {
        case 'string':
            addStringType(element, node);
            break;
        case 'object':
            if (Array.isArray(node)) {
                for (let item of node) {
                    addNodeDependsOnType(element, item);  
                }  
            } else {
                element.append(node);
            }
            break;
        case 'function':
            addFunctionType(element, node);
            break;
        default:
            return;
    }
}

const addFunctionType = (element, node) => {
    addNodeDependsOnType(element, node());
}

const addStringType = (element, node) => {
    element.insertAdjacentHTML('beforeend', `${document.createTextNode(node).nodeValue} `);
}


export default function appendJQ() {
    for (let node of arguments) {
        if (this.length === undefined) {
            addNodeDependsOnType(this, node);
            } else {
                 for (let element of this) {
                    addNodeDependsOnType(element, node);
                }
            }   
        }
}
