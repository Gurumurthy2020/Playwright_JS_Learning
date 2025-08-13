const{test,expect} = require('@playwright/test');

test.only("assertions practise",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=page.locator("[name='username']");
    await expect(username).toBeVisible();
    const submitbutton=page.locator("[type='submit']");

    await username.fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    await expect(submitbutton).toBeVisible();

    await page.getByRole("button",{name:"submit"}).click();

  //  await submitbutton.click();
    //const expectdtitle=page.title("ProtoCommerce");
    await expect(page).toHaveTitle("ProtoCommerce");
        await page.pause();
    await page.locator().waitFor({'state':'visible'});

})

