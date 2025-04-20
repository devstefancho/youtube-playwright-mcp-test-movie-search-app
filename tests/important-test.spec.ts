import { test, expect } from "@playwright/test";

test.describe("영화 소개 웹사이트 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 메인 페이지로 이동
    await page.goto("http://localhost:5173");
  });

  test("인기 영화 목록 조회", async ({ page }) => {
    // 메인 페이지 타이틀 확인
    await expect(page.locator("h1")).toHaveText("인기 영화");

    // 영화 카드가 여러 개 표시되는지 확인
    const movieCards = page.locator("a.card");
    const count = await movieCards.count();
    expect(count).toBeGreaterThanOrEqual(10);

    // 페이지네이션 존재 확인
    await expect(page.locator(".flex.justify-center.mt-12")).toBeVisible();
    await expect(page.locator(".flex.items-center.px-4")).toContainText(
      "1 / 500",
    );
  });

  test("영화 검색 기능", async ({ page }) => {
    // 검색어 입력
    await page.fill('input[placeholder="영화 검색..."]', "마인크래프트");

    // 검색 버튼 클릭
    await page.click('button[type="submit"]');

    // 검색 결과 페이지로 이동 확인
    await expect(page.locator("h1")).toContainText('"마인크래프트" 검색 결과');

    // 검색 결과에 마인크래프트 영화가 포함되어 있는지 확인
    const searchResults = page.locator("a.card h3");
    const count = await searchResults.count();
    let foundMatch = false;

    for (let i = 0; i < count; i++) {
      const text = await searchResults.nth(i).textContent();
      if (text && text.includes("마인크래프트")) {
        foundMatch = true;
        break;
      }
    }

    expect(foundMatch).toBeTruthy();
  });

  test("영화 상세 정보 조회", async ({ page }) => {
    // 첫 번째 영화 카드 선택
    const firstMovieCard = page.locator("a.card").first();

    // 영화 제목 저장
    const movieTitle = await firstMovieCard.locator("h3").textContent();

    // 상세 페이지로 이동
    await firstMovieCard.click();

    // URL이 영화 상세 페이지 형식인지 확인
    await expect(page).toHaveURL(/\/movie\/\d+/);

    // 영화 상세 페이지에 중요 요소들이 포함되어 있는지 확인
    await expect(page.locator("h1")).toContainText(movieTitle);

    // 영화 정보 섹션 확인
    await expect(page.getByText("줄거리")).toBeVisible();
    await expect(page.getByText("장르")).toBeVisible();
    await expect(page.getByText("개봉일")).toBeVisible();
    await expect(page.getByText("평점")).toBeVisible();

    // 출연진 섹션 확인
    await expect(page.getByText("주요 출연진")).toBeVisible();

    // 추천 영화 섹션 확인
    await expect(page.getByText("추천 영화")).toBeVisible();
  });

  test("영화 카드 UI 요소 확인", async ({ page }) => {
    // 영화 카드의 UI 요소 검증
    const firstCard = page.locator("a.card").first();

    // 포스터 이미지 확인
    await expect(firstCard.locator("img")).toBeVisible();

    // 평점 배지 확인
    await expect(firstCard.locator(".absolute.top-2.right-2")).toBeVisible();

    // 영화 제목 확인
    await expect(firstCard.locator("h3")).toBeVisible();

    // 개봉 연도 확인
    await expect(firstCard.locator("p.text-gray-500")).toBeVisible();
  });
});
