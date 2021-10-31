import { APIUtil } from "./api_util";

export default class FollowToggle {
  constructor($el, options) {
    this.$el = $el;

    this.userId = this.$el.data("user-id") || options.userId;
    this.followed = this.$el.data("initial-follow-state") || options.followed;

    this.render();
    this.addClickHandler();
  }

  render() {
    if (this.followed) 
      this.$el.text("Unfollow");
    else
      this.$el.text("Follow");
  }

  disableButton() {
    this.$el.prop("disabled", true);
    setTimeout(() => {
      this.$el.prop("disabled", false);
    }, 1000);
  }

  addClickHandler() {
    this.$el.on("click", event => {
      event.preventDefault();

      this.disableButton(); // disable the button temporarily so we only click once
      if (this.followed)
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followed = false;
          this.render();
        });
      else
        APIUtil.followUser(this.userId).then(() => {
          this.followed = true;
          this.render();
        });
    });
  }
}