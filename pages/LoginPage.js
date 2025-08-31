const {expect}= require("@playwright/test");
class LoginPage
{
constructor(page)
{
    this.page=page;
    this.username="#email1";
    this.password="//input[@name='password1']";
    this.signinbutton="[type='submit']";
    this.signindisplayed="//h2[text()='Sign In']";
}

async loginToApplication()
{
    await this.page.fill(this.username,"admin@email.com");
    await this.page.fill(this.password,"admin@123");
    await this.page.click(this.signinbutton);
}

async verifyingLoginScreen()
{
    await expect(this.page.locator(this.signindisplayed)).toBeVisible();
}

}

module.exports=LoginPage;