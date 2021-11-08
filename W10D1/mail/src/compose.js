import { RenderUtil } from "./render_util";

export default class Compose {
  constructor(messageStore) {
    this.messageStore = messageStore;
  }

  renderForm() {
    let draft = this.messageStore.getMessageDraft();
    return `
      ${RenderUtil.generateHTML('p', 'new-message-header', 'New Message')}
      ${RenderUtil.generateHTML('form', 'compose-form', `
        <input placeholder="Recipient" name="to" type="text" value="${draft.to}"></input>
        <input placeholder="Subject" name="subject" type="text" value="${draft.subject}"></input>  
        <textarea name="body" rows=20>${draft.body}</textarea>
        <button type="submit" class="btn btn-primary submit-message">Send</button>
      `)}
    `;
  }

  render() {
    let page = document.createElement("div");
    page.className = "new-message";
    page.innerHTML = this.renderForm();

    page.addEventListener("change", e => {
      let name = e.target.name;
      let value = e.target.value;

      this.messageStore.updateDraftField(name, value);
    });

    page.addEventListener("submit", e => {
      e.preventDefault();
      this.messageStore.sendDraft();
      window.location.hash = "#inbox";
    });

    return page;
  }
}