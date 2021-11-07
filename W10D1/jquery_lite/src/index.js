import DOMNodeCollection from "./dom_node_collection";

/*
  Core function.
    1. String indicates a CSS selector to identify nodes in the page
    2. Uses Document.querySelectorAll() to make a NodeList
    3. Convert to array then pass it on
*/
window.$l = (arg) => {
  if (typeof arg === "string" || arg instanceof String) {
    let elements = document.querySelectorAll(arg);
    let elementArray = Array.from(elements);
    return new DOMNodeCollection(elementArray);
  }
  else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
}