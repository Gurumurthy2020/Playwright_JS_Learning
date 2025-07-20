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
   
<<<<<<< HEAD
    await page.goto("https://google.com");               
})
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})
test('UI Controls', async ({page})=>
 {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=page.locator("#username");
    const signIn=page.locator("#signInBtn");
    const documentLink=page.locator("a[href*='documents-request']")
    await page.locator(".checkmark").last().click();
    await page.locator("#okayBtn").click();
    const dropDown= page.locator("select.form-control");
    await dropDown.selectOption("consult");
    await page.locator("[name='terms']").click();
    await expect(page.locator("[name='terms']")).toBeChecked();
    await page.locator("#terms").uncheck();
    console.log(await page.locator("#terms").isChecked());
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

 })

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
 
 })

 test("record and playback in playwright",async ({page})=>
    {  
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Password');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
});
 
=======
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

>>>>>>> 1cd10d71a3734644a3c25f72799b8c48f16b1286
