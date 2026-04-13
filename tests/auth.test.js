import { test, expect } from '@playwright/test';
import { credentials } from './helpers/config.js';

test('User can log in successfully', async ({ page }) => {
  await page.goto('/');

  // Fill login form
  await page.getByRole('textbox', { name: 'Email *' }).fill(credentials.email);
  await page.getByRole('textbox', { name: 'Password *' }).fill(credentials.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Home')).toBeVisible({ timeout: 15000 });

});


