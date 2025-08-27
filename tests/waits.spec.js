const {test,expect}=require('@playwright/test');

test.only("wait for network calls ",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();
        await page.waitForLoadState("networkidle");

    const checkbpxcount=await page.locator("[type='checkbox']").count();
   // expect(checkbpxcount===9);
    //or
    expect(checkbpxcount).toBe(9);
})