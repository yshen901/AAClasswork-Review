import { APIUtil } from "./api_util";   

export default class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$el.on("submit", (e) => {
      this.submit(e);
    });

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  disable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", true));
  }

  enable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", false));
  }   

  clearValues() {
    $('textarea').val("");
  }

  handleSuccess(response) {
    this.enable();
    this.clearValues();

    let $li = $("<li></li>");
    $li.text(JSON.stringify(response));
    $("#feed").append($li);
  }

  submit(e) {
    e.preventDefault();

    let formData = $(e.currentTarget).serializeJSON();
    this.disable();
    APIUtil.makeTweet(formData)
      .then((response) => this.handleSuccess(response));
  }
}