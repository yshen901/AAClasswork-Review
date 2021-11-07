import MessageStore from "./message_store";

let messagesSeed = {
  sent: [
    {
      to: "friend@mail.com",
      subject: "Check this out",
      body: "It's so cool"
    },
    { to: "person@mail.com", subject: "zzz", body: "so booring" }
  ],
  inbox: [
    {
      from: "grandma@mail.com",
      subject: "Fwd: Fwd: Fwd: Check this out",
      body:
        "Stay at home mom discovers cure for leg cramps. Doctors hate her"
    },
    {
      from: "person@mail.com",
      subject: "Questionnaire",
      body: "Take this free quiz win $1000 dollars"
    }
  ]
};

export default class Inbox {
  constructor() {
    this.messageStore = new MessageStore(messagesSeed);
    this.messages = this.messageStore.getInboxMessages()
    this.render();
  }

  render() {
    let messagesList = document.createElement("ul");
    messagesList.className = "messages";

    let message;
    for (let i = 0; i < this.messages.length; i++) {
      message = this.messageStore.renderMessage(this.messages[i]);
      messagesList.appendChild(message);
    }

    return messagesList;
  }
}