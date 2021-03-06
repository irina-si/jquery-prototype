const clickDependsOnArguments = (element, optionalOrHandler, handler) => {
    if (optionalOrHandler === undefined) {
        let event = new Event("click");
        element.dispatchEvent(event);
    } else if (!handler) {
        element.addEventListener('click', optionalOrHandler);
    } else {
        element.addEventListener('click', (event) => {
            event.data = optionalOrHandler;
            handler(event);
        });
        
    }
}

export default function click(optionalOrHandler, handler) {
    if (this.length === undefined) {
        clickDependsOnArguments(this, optionalOrHandler, handler);
    } else {
        for (let element of this) {
            clickDependsOnArguments(element, optionalOrHandler, handler);
        }
    }
}