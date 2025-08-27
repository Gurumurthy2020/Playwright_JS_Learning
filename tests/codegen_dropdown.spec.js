import { test, expect } from '@playwright/test';

//npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -o ./tests/codegen.spec.js

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('manda user').click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test.only("dropdown practise",async({page})=>{
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  // select option has 3 ways value,index,label,
  await page.locator("[name='state']").selectOption({value:"Gujarat"});
  await page.waitForTimeout(2000);

  await page.locator("[name='state']").selectOption({label:"Nagaland"});
    await page.waitForTimeout(2000);

    await page.locator("[name='state']").selectOption({index:13});
        await page.waitForTimeout(2000);

})