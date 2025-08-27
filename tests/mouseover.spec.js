const{test,expect}=require("@playwright/test")

test.only("Mouse over actions",async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").fill("admin@email.com");
    await page.getByPlaceholder("Enter Password").fill("admin@123");
    await page.getByRole("button",{name:"Sign in"}).click();
    await page.locator("//span[text()='Manage']").hover();
    await page.getByText("Manage Courses").click();
    await page.pause();
    await expect(page).toHaveTitle("Learn Automation Courses");

})
