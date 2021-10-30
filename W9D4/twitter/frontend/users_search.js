import { APIUtil } from "./api_util";

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

        let $li, $a;
        for (let i = 0; i < output.length; i++) {
          $a = $("<a></a>");
          $a.attr("href", `/users/${output[i].id}`);
          $a.text(output[i].username);

          $li = $("<li></li>");
          $li.append($a);
          this.$usersList.append($li);
        }
      });
    });
  }
}