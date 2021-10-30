import FollowToggle from "./follow_toggle";

$(() => {
  let followToggles = [];
  let $buttons = $(".follow-toggle");
  $buttons.each((idx, ele) => {
    followToggles.push(new FollowToggle($(ele)));
  });
});