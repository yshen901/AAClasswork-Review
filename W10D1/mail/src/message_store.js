export default class MessageStore {
  constructor({sent, inbox}) {
    this.messages = {   // each property holds an array of messages
      sent: sent,       // each message is an object, with properties to/from, subject, and body
      inbox: inbox
    };
  }

  getInboxMessages() {
    return this.messages.inbox;
  }

  getSentMessages() {
    return this.messages.sent;
  }

  renderMessage(message) {
    let li = document.createElement("li");
    li.className = "message";
    li.innerHTML = `
      ${this.generateHTML("span", "from", message.from)}
      ${this.generateHTML("span", "subject", message.subject)}
      ${this.generateHTML("span", "body", message.body)}
    `

    return li;
  }

  //HELPER
  generateHTML(tag, className, text) {
    return `<${tag} class="${className}">${text}</${tag}>`
  }
}