import { test, expect } from '@playwright/test';
import { credentials } from './helpers/config.js';

const randomStockName = Math.random().toString(36).substring(2, 7);

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Email *' }).fill(credentials.email);
  await page.getByRole('textbox', { name: 'Password *' }).fill(credentials.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
});

test('Stock > Product Creation > Product Maintenance', async ({ page }) => {
  // Step 1 — Navigate to Stock
  await page.locator('a:nth-child(10)').click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('textbox', { name: 'Stock Name *' }).fill(`${randomStockName}`);

  await page.getByRole('combobox', { name: 'Stock Category *' }).click();
  await page.getByRole('combobox', { name: 'Stock Category *' }).pressSequentially('Electronics', { delay: 100 });
  await page.getByRole('option', { name: 'Electronics', exact: true }).click(); 

  await page.getByRole('textbox', { name: 'Stock Location *' }).fill('dhaka');
  await page.getByRole('textbox', { name: 'sgagad' }).click();
  await page.getByText('13').first().click();
  await page.getByText('24').nth(1).click();
 
  await page.getByRole('textbox', { name: 'ok' }).fill('password');
  await page.getByRole('textbox', { name: 'e', exact: true }).click();
  await page.getByRole('textbox', { name: 'e', exact: true }).fill('password');  
 
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Success', { exact: true })).toBeVisible({ timeout: 15000 });
});