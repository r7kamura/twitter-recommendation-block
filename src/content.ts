import { blockPromotedTweets } from "./twitter";

window.setInterval(() => {
  blockPromotedTweets();
}, 1000);
