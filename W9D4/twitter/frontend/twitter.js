import FollowToggle from "./follow_toggle";
import UsersSearch from "./users_search";
import TweetCompose from "./tweet_compose";

$(() => {
  let followToggles = [];
  let $buttons = $(".follow-toggle");
  $buttons.each((idx, ele) => {
    followToggles.push(new FollowToggle($(ele)));
  });

  let $usersSearch = $(".users-search");   // one way to initialize
  let usersSearch = new UsersSearch($usersSearch);

  $(".tweet-compose").each((i, tc) => new TweetCompose(tc)); // another more way to initialize (more DRY)
});