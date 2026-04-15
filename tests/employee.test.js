import { test, expect } from '@playwright/test';
import { login } from './helpers/auth.js';
import { buildEmployeeData } from './helpers/testData.js';
import { enablePauseOnFailure } from './helpers/debugOnFailure.js';

enablePauseOnFailure(test);

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('Add a new employee', async ({ page }) => {
  const employee = buildEmployeeData();

  // Navigate to HR / Employee section
  await page.getByRole('link').nth(2).click();
  const addEmployeeBtn = page.getByRole('button', { name: 'Add New Employee' });

  await addEmployeeBtn.waitFor({ state: 'visible', timeout: 15000 });
  await addEmployeeBtn.click();

  // Fill employee form
  await page.getByRole('textbox', { name: 'Staff Id *' }).fill(employee.staffId);
  await page.getByRole('textbox', { name: 'First Name *' }).fill(employee.firstName);
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(employee.middleName);
  await page.getByRole('textbox', { name: 'Last Name *' }).fill(employee.lastName);
  await page.getByRole('textbox', { name: 'Identification Number *' }).fill(employee.identificationNumber);
  await page.getByRole('combobox', { name: 'Status *' }).click();
  await page.getByRole('combobox', { name: 'Status *' }).pressSequentially('active', { delay: 100 });
  await page.getByRole('option', { name: 'Active', exact: true }).click();

  // Gender
  await page.getByRole('combobox', { name: 'Gender' }).click();
  await page.getByRole('combobox', { name: 'Gender' }).pressSequentially('male', { delay: 100 });
  await page.getByRole('option', { name: 'Male', exact: true }).waitFor({ state: 'visible' });
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).click();
  await page.getByText('15').first().click();
  
  // Submit
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  

  await page.getByRole('textbox', { name: 'Official Email *' }).fill(employee.officialEmail);
  await page.locator('#address_group_present_address_street_1').fill(employee.street);
  // Country

  const country = page.locator('#address_group_present_address_country');
  await country.click();
  await page.locator('#address_group_present_address_country').pressSequentially('Bangladesh', { delay: 100 });
  await country.press('Enter');

  // Division
  await page.getByRole('combobox', { name: 'Division *' }).click();
  await page.getByRole('combobox', { name: 'Division *' }).pressSequentially('dhaka', { delay: 100 });
  await page.getByRole('option', { name: 'Dhaka', exact: true }).click();

  // City
  await page.getByRole('combobox', { name: 'City *' }).click();
  await page.getByRole('combobox', { name: 'City *' }).pressSequentially('dh', { delay: 100 });
  await page.getByRole('option', { name: 'Dhaka', exact: true }).click();
  await page.locator('#address_group_present_address_zip').click();
  await page.locator('#address_group_present_address_zip').fill(employee.zip);
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
  
  // const successMessage = page.getByText('Success', { exact: true });
  // await successMessage.waitFor({ state: 'visible', timeout: 15000 });
  // await expect(successMessage).toBeVisible({ timeout: 15000 });
});