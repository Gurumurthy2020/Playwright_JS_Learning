const{test,expect}=require("@playwright/test");

test.only('keyboard actions',async({page})=>{

    //down is for holding
    //up is for releasing
    await page.goto("https://www.google.com/");
    await page.locator("[role='combobox']").fill("rajnikanth");
  //  await page.keyboard.press("Enter");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.down('Shift');
    for (let i = 0; i < 6; i++) {
    await page.keyboard.press('ArrowLeft'); // Select "ikanth!"
    }

    await page.pause();
    await page.keyboard.press("Shift+ArrowRight")
        await page.pause();

})