const {test,expect}=require("@playwright/test");

test.only("alerts in scree",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//     page.on('dialog', async dialog => {
//   console.log(dialog.message()); // Logs the alert message
//   await dialog.accept();         // Accepts the alert
//     });

//     await page.getByText("Click for JS Alert").click();


     page.on('dialog', async dialog => {
    console.log(dialog.message()); // Logs the alert message
        await dialog.dismiss();         // Accepts the alert
    });

    await page.getByText("Click for JS Confirm").click();
        await page.waitForTimeout(2000);

    // page.on('dialog',async dialog =>{
    //     console.log(dialog.message());
    //     dialog.accept('hi');
    // })
    //     await page.getByText("Click for JS Prompt").click();
    //     await page.waitForTimeout(2000);


})

test("handling frames",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frametext=await page.frameLocator('[name="top-iframe"]').locator(".heroTitle_ohkl").textContent();
    console.log(frametext);
    await page.getByText("Courses").click();
})