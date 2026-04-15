import { test, expect } from '@playwright/test';
import { login } from './helpers/auth.js';
import { enablePauseOnFailure } from './helpers/debugOnFailure.js';

enablePauseOnFailure(test);

test('User can log in successfully', async ({ page }) => {
  await login(page);
  await expect(page.getByText('Home')).toBeVisible({ timeout: 15000 });
});