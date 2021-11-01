import { APIUtil } from "./api_util";   

export default class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", (e) => {
      this.submit(e);
    });
    
    this.$charsLeft = this.$el.find(".chars-left");
    this.$textArea = this.$el.find("textarea");
    this.$textArea.on("input", (e) => {
      this.handleInput(e);
    });
    
    this.$tweetMentions = $("#tweet-mentions");
    this.$addMentions = $("#add-mentions-button");
    this.$addMentions.on("click", e => {
      this.addMention(e);
    });

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

    debugger;

    let select = `
      <select name="tweet[mentioned_user_ids][]"> 
        ${options}
      </select>
    `
    this.$tweetMentions.append($(select));
  }
}