const {test,expect}=require('@playwright/test');

test.only("hide and display actions",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/");
    await page.goBack();
    await expect (page.locator(".displayed-class")).toBeVisible();
    await page.locator(".class2").nth(1).click();
    await expect (page.locator(".displayed-class")).toBeHidden();
    page.on('dialogue',async dialogue => await dialogue.accept());
    await page.locator("input.btn-style").nth(1).click();
   // await page.pause();
    await page.locator(".btn-primary").nth(4).hover();

    const framespage=page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access']:visible").click();
    const text=await framespage.locator(".text h2").textContent();
    console.log(text.split(" ")[2]);

})
