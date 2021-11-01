import { APIUtil } from "./api_util";   

export default class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", (e) => {
      this.submit(e);
    });
    
    // to keep track of characters
    this.$charsLeft = this.$el.find(".chars-left");
    this.$textArea = this.$el.find("textarea");
    this.$textArea.on("input", (e) => {
      this.handleInput(e);
    });
    
    // to add/remove mentions
    this.$tweetMentions = $("#tweet-mentions");
    this.$addMentions = $("#add-mentions-button");
    this.$addMentions.on("click", e => {
      this.addMention(e);
    });
    this.$tweetMentions.on("click", ".remove-mentioned-user", (e) => {
      this.removeMention(e);
    });

    // to handle successful post
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  // Helper functions for submit and handleSuccess
  disable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", true));
  }

  enable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", false));
  }   

  clearValues() {
    $('textarea').val("");
  }

  // Success callback for the submit
  handleSuccess(response) {
    this.enable();
    this.clearValues();

    let $li = $("<li></li>");
    $li.text(JSON.stringify(response));
    $("#feed").append($li);
  }

  // Fires an AJAX call to make the tweet
  submit(e) {
    e.preventDefault();
    debugger;

    let formData = $(e.currentTarget).serializeJSON();
    this.disable();
    APIUtil.makeTweet(formData)
      .then((response) => this.handleSuccess(response));
  }

  // Updates the chars left counter
  handleInput(e) {
    let charsLeft = 140 - this.$textArea.val().length;
    this.$charsLeft.text(`${charsLeft}/140`);
  }

  // Adds an add mention dropdown list
  addMention(e) {
    e.preventDefault();
    e.stopPropagation();

    let options = window.users.map((user) => 
      `<option value="${user.id}">${user.username}</option>`
    ).join("");

    let select = `
      <div>
        <select name="tweet[mentioned_user_ids][]"> 
        ${options}
        </select>
        <a class="remove-mentioned-user">Remove</a>
      </div>
    `
    this.$tweetMentions.append($(select));
  }

  // Removes the parent div
  removeMention(e) {
    e.preventDefault();
    e.stopPropagation();

    e.currentTarget.parentElement.remove();
  }
}