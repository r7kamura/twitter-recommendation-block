import {
  blockPromotedTweetsInTimeline,
  blockRecommendedTopicsInTimeline,
  blockRecommendedUsersInTimeline,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweetsInTimeline();
  blockRecommendedTopicsInTimeline();
  blockRecommendedUsersInTimeline();
}, 1000);
