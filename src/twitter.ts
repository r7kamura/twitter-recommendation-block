import { compact } from "./array";

export function blockPromotedTweets() {
  findPromotedTweetCellItems().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockRecommendedTopics() {
  findRecommendedTopicsCellItems().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockWhoToFollow() {
  findWhoToFollowCellItems().forEach((element) => {
    element.style.display = "none";
  });
}

function findBlankCellItems() {
  return compact(
    Array.from(
      document.querySelectorAll(
        'div[data-testid="cellInnerDiv"] > div > div:empty'
      )
    ).map((element) => {
      return element.closest('div[data-testid="cellInnerDiv"]');
    })
  );
}

function findPromotedTweetCellItems() {
  return compact(
    Array.from(
      document.querySelectorAll('div[data-testid="placementTracking"] article')
    ).map((element) => {
      return element.closest('div[data-testid="cellInnerDiv"]');
    })
  );
}

function findRecommendedTopicsCellItems() {
  return [
    ...findRecommendedTopicsListCellItems(),
    ...findRecommendedTopicsMoreTopicsCellItems(),
  ];
}

function findRecommendedTopicsListCellItems() {
  return compact(
    Array.from(document.querySelectorAll('section[role="region"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}

function findRecommendedTopicsMoreTopicsCellItems() {
  return compact(
    Array.from(
      document.querySelectorAll('a[href="/i/topics/picker/home"]')
    ).map((element) => {
      return element.closest('div[data-testid="cellInnerDiv"]');
    })
  );
}

function findWhoToFollowCellItems() {
  return [
    ...findBlankCellItems(),
    ...findWhoToFollowHeadingCellItems(),
    ...findFollowableCellItems(),
    ...findWhoToFollowShowMoreCellItems(),
  ];
}

function findWhoToFollowHeadingCellItems() {
  return compact(
    Array.from(document.querySelectorAll('h2[role="heading"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}

function findWhoToFollowShowMoreCellItems() {
  return compact(
    Array.from(document.querySelectorAll('a[href^="/i/connect_people"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}

function findFollowableCellItems() {
  return compact(
    Array.from(document.querySelectorAll('div[data-testid$="-follow"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}
