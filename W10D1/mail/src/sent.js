import MessageStore from "./message_store";

export default class Sent {
  constructor() {
    this.messageStore = new MessageStore();
    this.messages = this.messageStore.getSentMessages();
    this.render();
  }

  render() {
    let messagesList = document.createElement("ul");
    messagesList.className = "messages";

    let message;
    for (let i = 0; i < this.messages.length; i++) {
      message = this.messageStore.renderMessage(this.messages[i], "to");
      messagesList.appendChild(message);
    }

    return messagesList;
  }
}