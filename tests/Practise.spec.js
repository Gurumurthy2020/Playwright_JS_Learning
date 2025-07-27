const {test,expect, firefox} = require('@playwright/test');
// const { allowedNodeEnvironmentFlags } = require('process');

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

test("third practise child window",async({browser})=>
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

test("practising end to end",async({page})=>
{
    const expectedProductName="Fancy Green Top";
    await page.goto("https://automationexercise.com/login");
    await page.locator("[data-qa='login-email']").fill("Muruga@2025");
    await page.locator("[data-qa='login-password']").fill("Muruga@2025");
    await page.locator("[data-qa='login-button']").click();
    await expect(page).toHaveTitle("Automation Exercise");
    const productcount=await page.locator("div.text-center").count();
    console.log(productcount);
    console.log(await page.locator(".productinfo p").allTextContents());
 
    for (let i = 0; i < productcount; i++) {
  const item = page.locator(".productinfo p").nth(i);
  await item.scrollIntoViewIfNeeded();
  const itemText = await item.textContent();

  if (itemText?.trim() === expectedProductName) {
    console.log(itemText);
    await page.locator(".productinfo a").nth(i).locator('text=Add to cart').click();
    break; // Optional: stop after adding the desired product
  }
}
    await page.locator("p.text-center a").click();
    await page.locator("a:has-text('Fancy Green Top')").first().waitFor();
    const bool=await page.locator("a:has-text('Fancy Green Top')").isVisible();
    await expect(bool).toBeTruthy();

    await page.locator("text=Proceed To Checkout").click();
    const addressdetails=page.locator("text=Address Details").isVisible();
    await expect(addressdetails).toBeTruthy();
    await page.locator("text=Place Order").click();
})


test("child window practise",async({browser})=>
  {
   
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const doclink=await page.locator("a.blinkingText");
    const [newpage]=await Promise.all([
      context.waitForEvent('page'),
      doclink.click()
    ])
    await expect(newpage).toHaveTitle("RS Academy");
    const text=await newpage.locator(".inner-box h1").textContent();
    expect(text.includes("Documents request")).toBeTruthy();
    await page.bringToFront();


})

test("e2e with a new page",async({page})=>
{
  await page.goto("https://practice.expandtesting.com/");
  await page.locator("a.my-link").nth(1).scrollIntoViewIfNeeded();
  await page.locator("a.my-link").nth(1).click();
  await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");
  await page.locator("[name='username']").fill("practice");
  await page.locator("[type='password']").fill("asd!");
  await page.locator("[type='submit']").click();
  const invalidpassword=await page.locator("text=Your password is invalid!").textContent();
  expect(invalidpassword.includes("Your password is invalid!")).toBeTruthy();
  await page.locator("[name='username']").fill("practice");
  await page.locator("[type='password']").fill("SuperSecretPassword!");
  await page.locator("[type='submit']").click();
  const loggdinmsg=await page.locator("text=You logged into a secure area!").textContent();
  expect(loggdinmsg.includes("You logged into a secure area!")).toBeTruthy();
  await page.locator(".icon-signout").click();
  const logoutmsg=await page.locator("text=You logged out of the secure area!").textContent();
  expect(logoutmsg.includes("You logged out of the secure area!")).toBeTruthy();
  await page.pause();
})

test.only("e2e with multiple windows",async({browser})=>{
  const context=await browser.newContext();
  const page= await context.newPage();
  await page.goto("https://practice.expandtesting.com/");
  await page.locator("[href='/windows']").first().scrollIntoViewIfNeeded();
  await page.locator("[href='/windows']").first().click();
  
  
  await expect(page).toHaveTitle("Automation Testing Practice Website for QA and Developers | UI and API");
  const windowslink=await page.locator("[href='/windows/new']");
  const [newpage]=await Promise.all([
    context.waitForEvent('page'),
    windowslink.click()
  ])

  const newwindowmsg=await newpage.locator("div.example").textContent();
  expect(newwindowmsg.includes("Example of a new window page for Automation Testing Practice")).toBeTruthy();
  await page.bringToFront();

})