export function appendJQ() {

    function addNodeDependsOnType(node) {
        switch (typeof node) {
            case 'string':
                addStringType(node);
                break;
            case 'object':
                if (Array.isArray(node)) {
                    for (let item of node) {
                        addNodeDependsOnType(item);  
                    }
                } else {
                    parent.append(node);
                }
                break;
            case 'function':
                addFunctionType(node);
                break;
            default:
                return;
        }
    }

    function addStringType(node) {
        let elem = document.createTextNode(node);
        parent.insertAdjacentHTML('beforeend', elem.nodeValue+' ');
    }

    function addFunctionType(node) {
        addNodeDependsOnType(node());
    }
    
    let parent = this;
    for (let node of arguments) {
            addNodeDependsOnType(node);
        }
}
