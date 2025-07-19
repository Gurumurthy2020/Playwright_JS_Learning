const {test,expect} = require('@playwright/test');
const { allowedNodeEnvironmentFlags } = require('process');

test('practise session',async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[type='email']").fill("guruishu2016@gmail.com");
    await page.locator("[type='password']").fill("Muruga2025");
    await page.locator("[type='submit']").click();
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState('networkidle');
    // if above wait not working we can use below
    // all text content does not have inbuilt wait mecahnism
    await page.locator(".card-body b").last().waitFor();
    const titles=await page.locator(".card-body b").allTextContents();
    console.log(titles);
    console.log(await page.locator(".card-body b").nth(0).textContent());

})

test("second pract",async({page})=>
{
    await page.goto("https://practice-automation.com/form-fields/");
    await page.locator("[type='text']").nth(0).fill("guru");
    await page.locator("[type='password']").fill("dummy");
    await page.locator("[type='checkbox']").nth(0).click();
    await page.locator("[type='radio']").nth(0).click();
    await page.locator("[name='automation']").selectOption("Yes");
    await page.pause();
    await page.locator("[title='No fake emails!']").fill("123@gmail.com");
    await page.locator("[placeholder*='here']").fill("helloo");
    await page.locator("[type='radio']").nth(1).click();
    // we need to use await where we are doing action
     expect (await page.locator("[type='radio']").nth(0).isChecked()).toBeFalsy();

})

test.only("third practise child window",async({browser})=>
{
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         

        const [np]=await Promise.all([
            context.waitForEvent('page'),
            page.locator("[target='_blank']").click(),
        ])
        const str=await np.locator("div.text").textContent();
        //console.log(str);
        const newstr=str.split('"')[3];
        console.log(newstr.replace(/\s+/g," "));
        await page.locator("[name='username']").fill(newstr.replace(/\s+/g," "));
        const value=await page.locator("[name='username']").inputValue();
        console.log(value);

  
 
});

