import {
  blockPromotedTweets,
  blockRecommendedTopics,
  blockWhoToFollow,
} from "./twitter";

window.setInterval(() => {
  blockPromotedTweets();
  blockRecommendedTopics();
  blockWhoToFollow();
}, 1000);
