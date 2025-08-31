const{test,expect}=require('@playwright/test')
const LoginPage=require("../../pages/LoginPage")
const HomePage = require('../../pages/HomePage'); 

test("login page",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginpage= new LoginPage(page);
    await loginpage.loginToApplication();
    const homepage= new HomePage(page);
    await homepage.verifyManagerOptions();
   await homepage.logoutFromApplication();
   await loginpage.verifyingLoginScreen();

})