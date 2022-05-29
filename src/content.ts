import {
  blockPromotedTweetsInTimeline,
  blockRecommendedTopicsInTimeline,
  blockRecommendedUsersInSidebar,
  blockRecommendedUsersInTimeline,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweetsInTimeline();
  blockRecommendedTopicsInTimeline();
  blockRecommendedUsersInSidebar();
  blockRecommendedUsersInTimeline();
}, 1000);
