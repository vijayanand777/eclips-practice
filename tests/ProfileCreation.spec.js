import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.6.8:3001/profile');
  await page.getByPlaceholder('Enter First Name...').click();
  await page.getByPlaceholder('Enter First Name...').fill('vijay anand');
  await page.getByPlaceholder('Enter Last Name...').click();
  await page.getByPlaceholder('Enter Last Name...').fill('nallabothula');
  await page.getByPlaceholder('Ex - 3 years').click();
  await page.getByPlaceholder('Ex - 3 years').fill('3');
  await page.locator('.css-qbdosj-Input').click();
  await page.getByText('React JS').click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByText('Click Here to Add Summary').click();
  await page.getByPlaceholder('Add your summary...').fill('Added new summary points');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByText('Click Here to Add Education').click();
  await page.getByPlaceholder('Add your education...').fill('12');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByText('Click Here to Add Education').click();
  await page.getByPlaceholder('Add your education...').fill('1o90');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.locator('.css-qbdosj-Input').first().click();
  await page.getByText('Javascript').click();
  await page.locator('.css-qbdosj-Input').first().click();
  await page.getByText('selenium').click();
  await page.locator('.css-qbdosj-Input').first().click();
  await page.getByText('java', { exact: true }).click();
  await page.getByText('Javascriptseleniumjava').click();
  await page.getByText('test', { exact: true }).click();
  await page.locator('.css-1fdsijx-ValueContainer > .css-qbdosj-Input').first().click();
  await page.getByText('MYSQL').click();
  await page.locator('.css-t3ipsp-control > .css-3w2yfm-ValueContainer > .css-qbdosj-Input').click();
  await page.getByText('sql', { exact: true }).click();
  await page.locator('.css-t3ipsp-control > .css-3w2yfm-ValueContainer > .css-qbdosj-Input').click();
  await page.getByText('postgre', { exact: true }).click();
  await page.locator('.css-1fdsijx-ValueContainer > .css-qbdosj-Input').first().click();
  await page.getByText('azure').click();
  await page.locator('.css-t3ipsp-control > .css-3w2yfm-ValueContainer > .css-qbdosj-Input').click();
  await page.locator('#react-select-5-option-3').click();
  await page.locator('.css-1fdsijx-ValueContainer > .css-qbdosj-Input').first().click();
  await page.getByText('JIRA').click();
  await page.locator('.css-1fdsijx-ValueContainer > .css-qbdosj-Input').click();
  await page.locator('#react-select-7-option-1').click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByText('Click Here to Add Project').click();
  await page.getByPlaceholder('Add Project Name...').click();
  await page.getByPlaceholder('Add Project Name...').fill('java');
  await page.getByText('Click Here to Add Technologies').click();
  await page.getByPlaceholder('Add project technologies...').fill('Maqdjabgkdfgaskdfsadfasfvsa ad');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByText('Click Here to Add Responsibilities').click();
  await page.getByPlaceholder('Add project responsibilities...').fill('DASFASFASFASFASF VDSFASWFASF');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByText('Click Here to Add Description').click();
  await page.getByPlaceholder('Add project description...').fill('DASDADADASA SDFSDFVDSFS SDFSAFDSF');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByText('Click Here to Add Duration').click();
  await page.getByPlaceholder('Ex - 3 Months').fill('5');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.getByRole('button', { name: 'VIEW PDF' }).click();
  await page.getByRole('img').first().click();
  await page.getByRole('button', { name: 'PDF' }).click();
  await page.getByRole('button', { name: 'PDF' }).click();
  await page.pause();
});