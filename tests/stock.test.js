import { test, expect } from '@playwright/test';
import { login } from './helpers/auth.js';
import { buildStockData } from './helpers/testData.js';
import { enablePauseOnFailure } from './helpers/debugOnFailure.js';

enablePauseOnFailure(test);

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('Stock > Product Creation > Product Maintenance', async ({ page }) => {
  const stock = buildStockData();

  // Step 1 — Navigate to Stock
  await page.locator('a:nth-child(10)').click();
  const addStock = page.getByRole('button', { name: 'Add New' });

  await addStock.waitFor({ state: 'visible', timeout: 15000 });
  await addStock.click();

  await page.getByRole('textbox', { name: 'Stock Name *' }).fill(stock.stockName);

  await page.getByRole('combobox', { name: 'Stock Category *' }).click();
  await page.getByRole('combobox', { name: 'Stock Category *' }).pressSequentially(stock.category, { delay: 100 });
  await page.getByRole('option', { name: stock.category, exact: true }).click(); 

  await page.getByRole('textbox', { name: 'Stock Location *' }).fill(stock.location);
  await page.getByRole('textbox', { name: 'sgagad' }).click();
  await page.getByText('17').nth(2).click();
  await page.getByText('26').nth(1).click();
 
  await page.getByRole('textbox', { name: 'ok' }).fill('password');
  await page.getByRole('textbox', { name: 'e', exact: true }).click();
  await page.getByRole('textbox', { name: 'e', exact: true }).fill('password');  
 
  await page.getByRole('button', { name: 'Save' }).click();
  const successMessage = page.getByText('Success', { exact: true });
  await successMessage.waitFor({ state: 'visible', timeout: 15000 });
  await expect(successMessage).toBeVisible({ timeout: 15000 });
});