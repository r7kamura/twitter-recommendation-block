import {
  blockPromotedTweets,
  blockRecommendedTopics,
  blockRecommendedUsers,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweets();
  blockRecommendedTopics();
  blockRecommendedUsers();
}, 1000);
