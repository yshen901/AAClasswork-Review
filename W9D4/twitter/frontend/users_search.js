import { APIUtil } from "./api_util";

export default class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$searchBar = $el.children("input");
    this.$usersList = this.$searchBar.children("ul");

    this.addSearchHandler();
  }

  addSearchHandler() {
    this.$el.on("input", "input", () => {
      APIUtil.searchUsers(this.$searchBar.val())
      .then((output) => { console.log(output )});
    });
  }
}