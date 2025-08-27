const{test,expect}=require("@playwright/test");

test.only("file upload using playwright",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("[type='file']").nth(0).setInputFiles("./testdata/dumy.txt");
    await page.pause();
    await page.locator("[type='submit']").click();
    const actual=page.getByText("File Uploaded").textContent();
    expect(actual==="File Uploaded!");


})

test.only("file upload using file chooser",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
   
page.once('filechooser', async (fileChooser) => {
  await fileChooser.setFiles('./testdata/dumy.txt');
});

// Trigger the file input via click
await page.locator('input[type="file"]').nth(0).click();

await page.locator('input[type="submit"]').click();

const actual = await page.locator('h3').textContent();
expect(actual?.trim()).toBe('File Uploaded!');

})