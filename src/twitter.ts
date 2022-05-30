import { compact } from "./array";

export function blockPromotedTweetsInTimeline() {
  findPromotedTweetCellItems().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockRecommendedTopicsInSidebar() {
  findRecommendedTopicsSidebarSection().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockRecommendedTopicsInTimeline() {
  findRecommendedTopicsCellItems().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockRecommendedUsersInSidebar() {
  findRecommendedUsersSidebarSection().forEach((element) => {
    element.style.display = "none";
  });
}

export function blockRecommendedUsersInTimeline() {
  findRecommendedUsersCellItems().forEach((element) => {
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

function findRecommendedUsersCellItems() {
  return [
    ...findBlankCellItems(),
    ...findRecommendedUsersHeadingCellItems(),
    ...findRecommendedUsersUserCellItems(),
    ...findRecommendedUsersShowMoreCellItems(),
  ];
}

function findRecommendedUsersHeadingCellItems() {
  return compact(
    Array.from(document.querySelectorAll('h2[role="heading"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}

function findRecommendedUsersShowMoreCellItems() {
  return compact(
    Array.from(document.querySelectorAll('a[href^="/i/connect_people"]')).map(
      (element) => {
        return element.closest('div[data-testid="cellInnerDiv"]');
      }
    )
  );
}

function findRecommendedTopicsSidebarSection() {
  return compact(
    Array.from(
      document.querySelectorAll('a[href="/explore/tabs/for-you"]')
    ).map((element) => {
      return element.closest('section[role="region"]')?.parentElement
        ?.parentElement;
    })
  );
}

function findRecommendedUsersSidebarSection() {
  return compact(
    Array.from(document.querySelectorAll('a[href^="/i/connect_people"]')).map(
      (element) => {
        return element.closest('aside[role="complementary"]')?.parentElement;
      }
    )
  );
}

function findRecommendedUsersUserCellItems() {
  return compact(
    Array.from(
      document.querySelectorAll(
        'div[data-testid="UserCell"] path[d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"]'
      )
    ).map((element) => {
      return element.closest('div[data-testid="cellInnerDiv"]');
    })
  );
}
