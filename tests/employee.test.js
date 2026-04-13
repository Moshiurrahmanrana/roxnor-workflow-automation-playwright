import { test, expect } from '@playwright/test';
import { credentials } from './helpers/config.js';

const randomNum = Math.random().toString(36).substring(2, 7);

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Email *' }).fill(credentials.email);
  await page.getByRole('textbox', { name: 'Password *' }).fill(credentials.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
});

test('Add a new employee', async ({ page }) => {
  // Navigate to HR / Employee section
  await page.getByRole('link').nth(2).click();
  await page.getByRole('button', { name: 'Add New Employee' }).click();

  // Fill employee form
  await page.getByRole('textbox', { name: 'Staff Id *' }).fill(`${randomNum}`);
  await page.getByRole('textbox', { name: 'First Name *' }).fill('moshiur');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('rahman');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('moshiur');
  await page.getByRole('textbox', { name: 'Identification Number *' }).fill('Employee');
  await page.getByRole('combobox', { name: 'Status *' }).click();
  await page.getByRole('combobox', { name: 'Status *' }).pressSequentially('active', { delay: 100 });
  await page.getByRole('option', { name: 'Active', exact: true }).click(); 

  // Gender
  await page.getByRole('combobox', { name: 'Gender' }).click();
  await page.getByRole('combobox', { name: 'Gender' }).pressSequentially('male', { delay: 100 });
await page.getByRole('option', { name: 'Male', exact: true }).waitFor({ state: 'visible' });
await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).click();
  await page.getByText('9').first().click();

  // Submit
  await page.getByRole('button', { name: 'Next', exact: true }).click();


  await page.getByRole('textbox', { name: 'Official Email *' }).fill(`moshiur+${randomNum}@gmail.com`);
  await page.locator('#address_group_present_address_street_1').fill('dhaka');
  // Country


  const country = page.locator('#address_group_present_address_country');
  await country.click();
  await page.locator('#address_group_present_address_country').pressSequentially('Bangladesh', { delay: 100 });
  await country.press('Enter');


// Division
await page.getByRole('combobox', { name: 'Division *' }).click();
await page.getByRole('combobox', { name: 'Division *' }).pressSequentially('dhaka', { delay: 100 });
// await page.getByRole('option', { name: 'Dhaka', exact: true }).waitFor({ state: 'visible' });
await page.getByRole('option', { name: 'Dhaka', exact: true }).click();
// City
await page.getByRole('combobox', { name: 'City *' }).click();
await page.getByRole('combobox', { name: 'City *' }).pressSequentially('dh', { delay: 100 });
// await page.getByRole('option', { name: 'Dhaka', exact: true }).waitFor({ state: 'visible' });
await page.getByRole('option', { name: 'Dhaka', exact: true }).click();
  await page.locator('#address_group_present_address_zip').click();
  await page.locator('#address_group_present_address_zip').fill('1212');
  await page.getByRole('checkbox', { name: 'Same as Present Address' }).check();
  await page.getByRole('button', { name: 'Next', exact: true }).click();


  await page.getByRole('combobox', { name: 'Job Type *' }).click();
  await page.locator('div').filter({ hasText: /^Full Time$/ }).nth(3).click();
  await page.getByRole('combobox', { name: 'Department *' }).click();
  await page.getByText('Quality Assurance').click();
  await page.getByRole('combobox', { name: 'Job Title *' }).click();
  await page.getByRole('option', { name: 'SQA Engineer' }).click();
  await page.getByRole('textbox', { name: 'Joining Date *' }).click();
  await page.getByText('30').nth(1).click();
  await page.getByRole('combobox', { name: 'Job Location *' }).click();
  await page.locator('div').filter({ hasText: /^Roxonor$/ }).nth(3).click();
  await page.getByRole('combobox', { name: 'Shift *' }).click();
  await page.locator('div').filter({ hasText: /^Morning Shift$/ }).nth(3).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  await page.getByRole('button', { name: 'New Joiner Questions', exact: true }).getByLabel('', { exact: true }).check();

  await page.getByRole('button', { name: 'Submit', exact: true }).click();

});