import { expect } from '@playwright/test';
import { credentials } from './config.js';

export async function login(page) {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Email *' }).fill(credentials.email);
  await page.getByRole('textbox', { name: 'Password *' }).fill(credentials.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}
