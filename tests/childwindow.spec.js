const{test,expect}=require('@playwright/test');

test.only("child window action",async({context})=>{
    const page=await context.newPage();
    await page.goto("https://practice-automation.com/window-operations/");

    const newtab= page.getByText("New Tab");
    const [newpage]=await Promise.all([
        context.waitForEvent('page'),
        newtab.click(),
    ])
   await newpage.locator("//span[text()='Courses']").click();
   await page.bringToFront();
   await page.getByText("Courses").click();

})