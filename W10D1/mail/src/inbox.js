export default class Inbox {
  constructor() {

  }

  render() {
    let messagesList = document.createElement("ul");
    messagesList.className = "messages";

    messagesList.innerHTML = "An Inbox Message";
  }
}