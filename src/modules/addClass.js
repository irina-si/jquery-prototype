const setClassAttribute = (element, classString) => {
    const currentClass = element.getAttribute("class") || "";
    element.setAttribute("class", `${currentClass} ${classString}`);
  };
  
const addClassString = (element, className) => {
    setClassAttribute(element, className);
  };
  
const addClassArray = (element, classNames) => {
    setClassAttribute(element, classNames.join(" "));
  };
  
const addClassFunction = (element, functionClass) => {
    addClassDependsOnAttribute(element, functionClass());
  };
  
const addClassDependsOnAttribute = (element, classAttr) => {
    switch (typeof classAttr) {
      case "string":
        addClassString(element, classAttr);
        break;
      case "object":
        if (!Array.isArray(classAttr)) return;
        addClassArray(element, classAttr);
        break;
      case "function":
        addClassFunction(element, classAttr);
        break;
      default:
        return;
    }
  };
  
export default function (addClassAttr) {
    if (this.length === undefined) {
      addClassDependsOnAttribute(this, addClassAttr);
    } else {
      for (let element of this) {
        addClassDependsOnAttribute(element, addClassAttr);
      }
    }
  }