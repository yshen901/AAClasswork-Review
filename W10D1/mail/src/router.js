export default class Router {
  constructor(node, routes) {
    this.node = node; //node is a DOMNode that we will edit
    this.routes = routes;

    this.start();
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  activeRoute() {
    let currentRoute = window.location.hash.slice(1); //remove # from hash

    // Return null if no valid component for hash, otherwise return component instance
    if (!this.routes[currentRoute])
      return null;
    return new this.routes[currentRoute]()
  }

  render() {
    //clear node and get current route
    let component = this.activeRoute();
    this.node.innerHTML = ""; 

    if (component)
      this.node.appendChild(component.render());
  }
}