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

export default class MessageStore {
  constructor() {
    this.messages = messagesSeed;
  }

  getInboxMessages() {
    return this.messages.inbox;
  }

  getSentMessages() {
    return this.messages.sent;
  }

  renderMessage(message, source) {
    let li = document.createElement("li");
    li.className = "message";
    li.innerHTML = `
      ${this.generateHTML("span", source, message[source])}
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