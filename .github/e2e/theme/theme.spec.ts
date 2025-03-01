import { expect, test } from '@playwright/test';

test.describe('test theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('default theme is dark', async ({ page }) => {
    await expect(page.getByTestId('theme-dark')).toBeVisible();
  });

  test('clicking on the theme toggle changes the theme', async ({ page }) => {
    await page.getByTestId('theme-toggle').click();

    await expect(page.getByTestId('theme-light')).toBeVisible();
  });
});
