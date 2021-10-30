import { APIUtil } from "./api_util";

export default class FollowToggle {
  constructor($el) {
    this.$el = $el;

    let data = this.$el.data("follow");
    this.userId = data['user-id'];
    this.followed = data['initial-follow-state'];

    this.render();
    this.addClickHandler();
  }

  render() {
    if (this.followed) 
      this.$el.text("Unfollow");
    else
      this.$el.text("Follow");
  }

  addClickHandler() {
    this.$el.on("click", event => {
      event.preventDefault();

      if (this.followed)
        APIUtil.unfollowUser(this.userId).then(() => {
          console.log("Unfollowed!");
          this.followed = false;
          this.render();
        });
      else
        APIUtil.followUser(this.userId).then(() => {
          console.log("Followed!");
          this.followed = true;
          this.render();
        });
    });
  }
}