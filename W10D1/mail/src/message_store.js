import { RenderUtil } from "./render_util"

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
    this.messageDraft = new Message();
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
      ${RenderUtil.generateHTML("span", source, message[source])}
      ${RenderUtil.generateHTML("span", "subject", message.subject)}
      ${RenderUtil.generateHTML("span", "body", message.body)}
    `

    return li;
  }

  getMessageDraft() {
    return this.messageDraft;
  }

  updateDraftField(field, value) {
    this.messageDraft[field] = value;
  }

  sendDraft() {
    this.messages.sent.push({
      to: this.messageDraft.to,
      subject: this.messageDraft.subject,
      body: this.messageDraft.body
    });
    debugger;
    this.messageDraft = new Message();
  }
}

class Message {
  constructor(to, subject, body) {
    this.to = to || "";
    this.subject = subject || "";
    this.body = body || "";
  }
}