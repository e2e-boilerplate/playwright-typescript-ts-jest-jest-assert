import * as assert from "assert";
import { chromium } from "playwright";

let page: any;
let browser: any;

describe("Sandbox", () => {
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await chromium.launch()
      : await chromium.launch({ headless: false });
    page = await browser.newPage();

    await page
      .goto("https://e2e-boilerplate.github.io/sandbox/", {
        waitUntil: "networkidle0",
      })
      // tslint:disable-next-line:no-empty
      .catch(() => {});
  });

  afterAll(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  test("should be on the sandbox", async () => {
    await page.waitForSelector("h1");
    const title = await page.$eval(
      "h1",
      (el: { textContent: any }) => el.textContent
    );

    assert.strictEqual(await page.title(), "Sandbox");
    assert.strictEqual(title, "Sandbox");
  });
});
