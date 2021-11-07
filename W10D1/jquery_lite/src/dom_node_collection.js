export default class DOMNodeCollection {
  constructor(elements) {
    this.htmlElements = elements;
  }

  // Returns innerHTML for no-arg, or sets innerHTML for str-arg
  html(str) {
    if (this.htmlElements.length == 0)
      return null;
    
    if (str === null) {
      return this.htmlElements[0].innerHTML;
    }
    else {
      for (let i = 0; i < this.htmlElements.length; i++)
        this.htmlElements[i].innerHTML = str;
    }
  }

  // Sets all nodes' html to nothing
  empty() {
    for (let i = 0; i < this.htmlElements.length; i++) 
      this.htmlElements[i].html = "";
  }

  // Appends a string, HTMLELement.outerHTML, or array of HTMLElements'
  // outerHTMLs to each node. 
  append(arg) {
    if (arg instanceof String) {
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

  // HELPER FUNCTIONS
  // Outputs a string of all of the outerHTML of all elements
  outerHTML() {
    str = "";
    for (let i = 0; i < this.htmlElements.length; i++)
      str += this.htmlElements[i].outerHTML;

    return str;
  }
}