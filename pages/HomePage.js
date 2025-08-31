
const {expect}=require("@playwright/test");

class HomePage
{

    constructor (page)
    {
        this.page=page;
        this.menu="//img[@alt='menu']";
        this.managebutton="//span[text()='Manage']";
        this.logout="//button[text()='Sign out']";

    }

    async verifyManagerOptions()
    {
        await expect(this.page.locator(this.managebutton)).toBeVisible();
    }

    async logoutFromApplication()
        {
        
            await this.page.click(this.menu);
            await this.page.click(this.logout);

        }
    

}

module.exports=HomePage;