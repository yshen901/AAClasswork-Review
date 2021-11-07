export default class Inbox {
  constructor() {

  this.render();
  }

  render() {
    let messagesList = document.createElement("ul");
    messagesList.className = "messages";

    messagesList.innerHTML = "An Inbox Message";

    return messagesList;
  }
}