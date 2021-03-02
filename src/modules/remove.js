export function removeJQ(selector) {
    
    if (selector === undefined) {
        this.remove();
        return;
    }

    let collection = this.querySelectorAll(selector);
    for (let item of collection) {
        item.remove();
    }
}