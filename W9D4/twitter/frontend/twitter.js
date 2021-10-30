import FollowToggle from "./follow_toggle";
import UsersSearch from "./users_search";

$(() => {
  let followToggles = [];
  let $buttons = $(".follow-toggle");
  $buttons.each((idx, ele) => {
    followToggles.push(new FollowToggle($(ele)));
  });

  let $usersSearch = $(".users-search");
  let usersSearch = new UsersSearch($usersSearch);
});