class HomePage
{

    constructor (page)
    {
        this.page=page;
        this.menu="//img[@alt='menu']";
        this.logout="//button[text()='Sign out']";

    }

    async logoutFromApplication()
        {
        
            await this.page.click(this.menu);
            await this.page.click(this.logout);

        }
    

}

module.exports=HomePage;