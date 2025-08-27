class LoginPage
{
constructor(page)
{
    this.page=page;
    this.username="#email1";
    this.password="//input[@name='password1']";
    this.signinbutton="[type='submit']";
}

async loginToApplication()
{
    await this.page.fill(this.username,"admin@email.com");
    await this.page.fill(this.password,"admin@123");
    await this.page.click(this.signinbutton);
}

}

module.exports=LoginPage;