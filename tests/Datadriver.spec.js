const{test,expect}=require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("C:\\Users\\gurum\\OneDrive\\Desktop\\Playwright\\PlaywrightAutomation\\testdata\\samplejson.json")));
    
test.only("data driven",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input.form-control").nth(0).fill(testdata.courses.webAutomation[0].courseTitle);
    await page.pause();

})