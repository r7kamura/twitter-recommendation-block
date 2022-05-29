import { blockPromotedTweets, blockWhoToFollow } from "./twitter";

window.setInterval(() => {
  blockPromotedTweets();
  blockWhoToFollow();
}, 1000);
