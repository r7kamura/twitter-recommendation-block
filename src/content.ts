import {
  blockPromotedTweetsInTimeline,
  blockRecommendedTopicsInSidebar,
  blockRecommendedTopicsInTimeline,
  blockRecommendedUsersInSidebar,
  blockRecommendedUsersInTimeline,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweetsInTimeline();
  blockRecommendedTopicsInSidebar();
  blockRecommendedTopicsInTimeline();
  blockRecommendedUsersInSidebar();
  blockRecommendedUsersInTimeline();
}, 1000);
