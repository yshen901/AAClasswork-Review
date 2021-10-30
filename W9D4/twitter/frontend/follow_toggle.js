export default class FollowToggle {
  constructor($el) {
    this.$el = $el;

    let data = this.$el.data("follow");
    this.userId = data['user-id'];
    this.followed = data['initial-follow-state'];

    this.render();
    this.handleClick();
  }

  render() {
    if (this.followed) 
      this.$el.text("Unfollow");
    else
      this.$el.text("Follow");
  }

  handleClick() {
    this.$el.on("click", event => {
      event.preventDefault();

      let action = "POST";
      if (this.followed)
        action = "DELETE";

      $.ajax({
        type: action, 
        url: `${this.userId}/follow`,
        dataType: 'json',
        success: () => {
          console.log("Success!");
          this.followed = !this.followed;
          this.render();
        }
      });
    });
  }
}