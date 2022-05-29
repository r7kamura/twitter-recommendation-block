import {
  blockPromotedTweetsInTimeline,
  blockRecommendedTopicsInTimeline,
  blockRecommendedUsersInSidebar,
  blockRecommendedUsersInTimeline,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweetsInTimeline();
  blockRecommendedTopicsInTimeline();
  blockRecommendedUsersInTimeline();
  blockRecommendedUsersInSidebar();
}, 1000);
