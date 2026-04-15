export function enablePauseOnFailure(test) {
  test.afterEach(async ({ page }, testInfo) => {
    const shouldPause = process.env.PAUSE_ON_FAILURE === '1' && !process.env.CI;
    const failed = testInfo.status !== testInfo.expectedStatus;

    if (!shouldPause || !failed || page.isClosed()) {
      return;
    }

    // Keep browser open on failure for interactive debugging.
    // Run with: PAUSE_ON_FAILURE=1 npm run test:e2e:headed
    await page.pause();
  });
}
