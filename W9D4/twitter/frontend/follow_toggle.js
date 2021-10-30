export default class FollowToggle {
  constructor($el) {
    this.$el = $el;

    let data = this.$el.data("follow");
    this.userId = data['user-id'];
    this.followState = data['initial-follow-state'];

    this.render();
  }

  render() {
    if (this.followState === 'followed') 
      this.$el.text("Unfollow");
    else
      this.$el.text("Follow");
  }
}