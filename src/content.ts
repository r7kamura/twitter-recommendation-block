import { compact } from "./array";

function blockPromotedTweets() {
  findPromotedTweets().forEach((element) => {
    element.style.display = "none";
  });
}

function findPromotedTweets() {
  return compact(
    Array.from(
      document.querySelectorAll('div[data-testid="placementTracking"] article')
    ).map((element) => {
      return element.closest('div[data-testid="cellInnerDiv"]');
    })
  );
}

window.setInterval(() => {
  blockPromotedTweets();
}, 1000);
