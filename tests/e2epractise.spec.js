const {test,expect} = require('@playwright/test');
const { json } = require('stream/consumers');

const testdata=JSON.parse(JSON.stringify(require("C:\\Users\\gurum\\OneDrive\\Desktop\\Playwright\\PlaywrightAutomation\\testdata\\e2epractise.json")))

test.only("practising e2e scenario ",async({page})=>{
     const employeeId = Math.floor(10000 + Math.random() * 90000);
     const empid=employeeId.toString();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill(testdata.Username);
    await page.locator("input.oxd-input").nth(1).fill(testdata.password);
    await page.locator("[type='submit']").click();
    const actualTitle = await page.title();
    console.log(actualTitle);   
   await expect(actualTitle).toBe("OrangeHRM");
    
    await page.getByText("PIM").click();
    await page.getByRole("button",{name:"Add"}).click();

    await page.locator("[name='firstName']").fill(testdata.firstName);

    await page.locator("[name='lastName']").fill(testdata.lastName);
    await page.locator("((//div[contains(@class,'oxd-input-group__label-wrapper')])[6]//following::div//input)[1]").fill(empid);
          

    await page.getByText("Save").click();
    
    await page.getByText("Personal Details").nth(1).waitFor({ state: 'visible' });

    await page.getByText("Employee List").click();

    await page.locator("(//input[contains(@class,'oxd-input--active')])[2]").fill(empid);
    await page.getByText(" Search ").click();

   await expect(page.locator(`text=${empid}`)).toBeVisible();

//    await expect(locator).toBeVisible();
//    await expect(locator).toBeHidden()
// await expect(locator).toHaveText(‘Welcome’);
// await expect(locator).toContainText(‘Success’);
// await expect(locator).toHaveAttribute(‘type’, ’email’);
// await expect(locator).toHaveCount(3);
// await expect(locator).toHaveClass(/active/);
// await expect(locator).toHaveValue(‘testuser’);
// await expect.soft(locator1).toHaveText(‘Welcome’);
// await expect.soft(locator2).toBeVisible();
// await expect.soft(locator3).toHaveValue(‘John’);







})