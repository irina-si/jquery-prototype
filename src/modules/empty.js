export function empty() {
    if (this.length === undefined) {
        this.innerHTML = '';     
    } else {
        for (let element of this) {
            element.innerHTML = '';
        }
    }
}