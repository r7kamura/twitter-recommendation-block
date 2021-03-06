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
  return findRecommendedUsersShowMoreCellItems().reduce(
    (cells: HTMLElement[], showMore: HTMLElement) => {
      let cell: HTMLElement | null = showMore;
      while (true) {
        cell = cell.previousSibling as HTMLElement | null;
        if (cell?.querySelector('div[data-testid="UserCell"]')) {
          cells.push(cell);
        } else {
          break;
        }
      }
      return cells;
    },
    []
  );
}
