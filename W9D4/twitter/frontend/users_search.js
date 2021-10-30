import { APIUtil } from "./api_util";
import FollowToggle from "./follow_toggle";

export default class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$searchBar = $el.children("input");
    this.$usersList = $el.children("ul");

    this.addSearchHandler();
  }

  addSearchHandler() {
    this.$el.on("input", "input", () => {
      APIUtil.searchUsers(this.$searchBar.val())
      .then((output) => {
        debugger;
        this.$usersList.empty();

        let $li, $a, $button;
        for (let i = 0; i < output.length; i++) {
          $a = $("<a></a>");
          $a.attr("href", `/users/${output[i].id}`);
          $a.text(output[i].username);

          $button = $("<button></button>");
          $button.addClass("follow-toggle");
          new FollowToggle($button, {
            userId: output[i].id,
            followed: output[i].followed
          });

          $li = $("<li></li>");
          $li.append($a);
          $li.append($button);
          this.$usersList.append($li);
        }
      });
    });
  }
}