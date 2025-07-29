const {test,expect}=require('@playwright/test');



test('Browser context Playwright test case',async ({browser})=>
{
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");               
})

test('Page  Playwright test case',async ({page})=>
{
   
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
   // making sycnhronous to asynchronous
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

test("end to end scenarios",async({page})=>{
 const email = "guruishu2016@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Muruga2025");
   await page.locator("[value='Login']").click();
   await expect(page).toHaveTitle("Let's Shop");
   await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count=await products.count();
   for(let i=0;i<count;i++){
      if(await products.nth(i).locator("b").textContent()=== productName)
               {
         await products.nth(i).locator('text=Add To Cart').click();
      }
   }

   await page.locator("[routerlink='/dashboard/cart']").click();
   await page.locator("div li").first().waitFor();
   const bool=page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   await expect(bool).toBeTruthy();

   await page.locator("text=Checkout").click();
   await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
  
   const dropdown=page.locator(".ta-results")
   await dropdown.waitFor();
   const size=await dropdown.locator("button").count();
   for(let i=0;i<size;i++){
      const expected=await dropdown.locator("button").nth(i).textContent();
      if(expected === " India")
      {
         await dropdown.locator("button").nth(i).click();
         console.log("Country:" + expected);
         break;
      }
      }
    await expect (page.locator(".user__name [type='text']").first()).toHaveText("guruishu2016@gmail.com");
    await page.locator(".action__submit").click();
    const ordermsg=await page.locator(".hero-primary").textContent();
    expect(ordermsg).toEqual(" Thankyou for the order. ")
    const ordernumber=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(ordernumber);
    
    await page.locator("[style*='margin-top']").nth(2).click();
    await page.locator("tbody").waitFor();
    const ordercount=await page.locator("tbody tr");
   // await page.pause();

    for(let i=0;i<await ordercount.count();i++)
    {
      const roworderid= await ordercount.nth(i).locator("th").textContent()
      if(ordernumber.includes(roworderid))
      {
         await ordercount.nth(i).locator("button").first().click();
         break;
      }
    }
    const orderpagetext=await page.locator("text= order summary ").textContent();
   // expect(orderpagetext).toContain(" order summary ");
    expect(orderpagetext.includes(" order summary ")).toBeTruthy();
    const orderiddetails=await page.locator("div.col-text").textContent();
    console.log("new"+orderiddetails);
    console.log("new 1"+ordernumber);
    expect(ordernumber.includes(orderiddetails)).toBeTruthy();
     

})

test.only("advance locators",async({page})=>
{
   await page.goto("https://rahulshettyacademy.com/angularpractice/");
   await page.getByLabel("Check me out if you Love IceCreams!").check();
   await page.getByLabel("Employed").check();
   await page.getByLabel("Gender").selectOption("Female");
   await page.getByPlaceholder("password").fill("abc123");
   await page.getByRole("button",{name:'Submit'}).click();
   const successmsg=await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
   expect(successmsg).toBeTruthy();
   await page.getByRole("link",{name:"Shop"}).click();

   await page.locator("app-card").filter({hasText:"iphone X"}).getByRole("button").click();


})