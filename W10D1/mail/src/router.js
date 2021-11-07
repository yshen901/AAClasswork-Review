export default class Router {
  constructor(node) {
    this.node = node; //node is a DOMNode that we will edit

    this.start();
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  activeRoute() {
    //placeholder
    return window.location.hash;
  }

  render() {
    //clear node and get current route
    this.node.innerHTML = ""; 
    let currentRoute = this.activeRoute();

    //make a new element containing current route
    let newContent = document.createElement("p");
    newContent.innerHTML = currentRoute;

    //add new element into the node as a child
    this.node.appendChild(newContent);
  }
}