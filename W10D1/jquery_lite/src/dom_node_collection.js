export default class DOMNodeCollection {
  constructor(elements) {
    this.htmlElements = elements;
  }

  // Returns innerHTML for no-arg, or sets innerHTML for str-arg
  html(str) {
    if (this.htmlElements.length == 0)
      return null;
    
    if (str === undefined) {
      return this.htmlElements[0].innerHTML;
    }
    else {
      for (let i = 0; i < this.htmlElements.length; i++)
        this.htmlElements[i].innerHTML = str;
    }
  }

  // Sets all nodes' innerHTML to nothing
  empty() {
    for (let i = 0; i < this.htmlElements.length; i++) 
      this.htmlElements[i].innerHTML = "";
  }

  // Appends a string, HTMLELement.outerHTML, or array of HTMLElements'
  // outerHTMLs to each node. 
  append(arg) {
    if (arg instanceof String || typeof arg === 'string') {
      for (let i = 0; i < this.htmlElements.length; i++)
        this.htmlElements[i].innerHTML += arg;
    }
    else if (arg instanceof HTMLElement) {
      for (let i = 0; i < this.htmlElements.length; i++) 
        this.htmlElements[i].innerHTML += arg.outerHTML;
    }
    else if (arg instanceof DOMNodeCollection) {
      for (let i = 0; i < this.htmlElements.length; i++) 
        this.htmlElements[i].innerHTML += arg.outerHTML();
    }
  }

  // Gets the attribute value for the first element in the set
  // Sets attribute for all elements in the set
  attr(attributeName, newValue) {
    if (this.htmlElements.length == 0)
      return null;
    
    if (newValue === undefined) {
      let attributes = this.htmlElements[0].attributes;
      return attributes.getNamedItem(attributeName).textContent;
    }
    else {
      let attr = document.createAttribute(attributeName);
      attr.value = newValue;
      for (let i = 0; i < this.htmlElements.length; i++)
        this.htmlElements[i].attributes.setNamedItem(attr);
    }
  }

  // adds the class to all elements
  addClass(className) {
    for (let i = 0; i < this.htmlElements.length; i++)
      this.htmlElements[i].classList.add(className)
  }

  // removes the class from all elements
  removeClass(className) {
    for (let i = 0; i < this.htmlElements.length; i++)
      this.htmlElements[i].classList.remove(className)
  }

  children() {
    let children = [];
    for (let i = 0; i < this.htmlElements.length; i++) {
      let newChildren = Array.from(this.htmlElements[i].children);
      children = children.concat(newChildren);
    }
    return new DOMNodeCollection(children);
  }

  parent() {
    let parents = [];
    for (let i = 0; i < this.htmlElements.length; i++) {
      let parent = this.htmlElements[i].parentElement;
      if (!parents.includes(parent))
        parents.push(parent);
    }
    return new DOMNodeCollection(parents);
  } 

  find(selectors) {
    let matchingDescendents = [];
    for (let i = 0; i < this.htmlElements.length; i++) {
      let newMatches = this.htmlElements[i].querySelectorAll(selectors)
      for (let j = 0; j < newMatches.length; j++) {
        if (!matchingDescendents.includes(newMatches[j]))
          matchingDescendents.push(newMatches[j]);
      }
    }
    return new DOMNodeCollection(matchingDescendents);
  }

  // Sets all outerHTML to ""
  remove() {
    for (let i = 0; i < this.htmlElements.length; i++) 
      this.htmlElements[i].outerHTML = "";
  }

  on(event, cb) {
    for (let i = 0; i < this.htmlElements.length; i++)
      this.htmlElements[i].addEventListener(event, cb);
  }

  off(event, cb) {
    for (let i = 0; i < this.htmlElements.length; i++) 
      this.htmlElements[i].removeEventListener(event, cb);
  }

  // HELPER FUNCTIONS
  // Outputs a string of all of the outerHTML of all elements
  outerHTML() {
    let str = "";
    for (let i = 0; i < this.htmlElements.length; i++)
      str += this.htmlElements[i].outerHTML;

    return str;
  }
}