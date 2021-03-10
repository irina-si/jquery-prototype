const makeChildrenList = (elementsList) => {
    let elementsCollection = [];
    for (let element of elementsList) {
        elementsCollection.push(...Array.from(element.children));
    }
    return elementsCollection;
}

const getChildren = (element) => {
    if (element.length === undefined) {
        return this.children;
    } else {
        return makeChildrenList(element);
    }
}

const filterChildren = (element, optionalSelector) => {
    const childrenList = Array.from(getChildren(element));
    return childrenList.filter((element) => element.matches(optionalSelector));
}

export default function childrenJQ(optionalSelector) {
    if (!optionalSelector) {
        return getChildren(this);
    } else {
        return filterChildren(this, optionalSelector);
    }
}

