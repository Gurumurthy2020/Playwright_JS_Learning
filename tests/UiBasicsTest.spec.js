const {test,expect}=require('@playwright/test');



test('Browser context Playwright test case',async ({browser})=>
{
    const context=await browser.newContext();
    const page= await context.newPage();
    
    const username=page.locator("[name='username']");
    const submitbutton=page.locator("[type='submit']");
    const alltext=page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");     
    console.log(await page.title());
    await username.fill("rahulshetty");
    await page.locator("[name='password']").fill("learning");
    await page.locator("[type='checkbox']").click();
    await submitbutton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
    await username.fill("rahulshettyacademy");
    await submitbutton.click();

    //console.log(await alltext.nth(0).textContent());
    console.log(await alltext.allTextContents());
    


})

test('Page  Playwright test case',async ({page})=>
{
   
    await page.goto("https://google.com");   
    console.log(await page.title());
    await expect (page).toHaveTitle("Google");
})

test('UI controls',async({page})=>{
    const username=page.locator("[name='username']");
    const submitbutton=page.locator("[type='submit']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    await page.locator("select.form-control").selectOption("consult");
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.checkmark").last()).toBeChecked();
    await page.locator("[name=terms]").click();
    await expect(page.locator("[name=terms]")).toBeChecked();
    await page.locator("[name=terms]").uncheck();
    await page.pause();
    expect(await page.locator("[name=terms]").isChecked()).toBeFalsy();
    await expect(page.locator("[target='_blank']")).toHaveAttribute('class','blinkingText');

    await submitbutton.click();

})

test.only('Child window handling ',async({browser})=>{
    const context       = await browser.newContext();
    const page          = await context.newPage();
     const username=page.locator("[name='username']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink  = page.locator("[href*='documents-request']");
 
// func for direct one tab to the link
 
    const [newPage] =await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),
 
])
    const text= await newPage.locator(".red").textContent();
    console.log(text);
    const arraytext=text.split("@");
    const domain=arraytext[1].split(" ")[0];
    console.log(await domain.trim());
     await page.locator("#username").fill(domain);
    const value = await page.locator("#username").inputValue();
    console.log(value);

    });

