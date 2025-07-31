const {test,expect}=require('@playwright/test');

test.only("calendar testing",async({page})=>{
    const date='25';
    const month='6';
    const year='2021';
    const expected=[month,date,year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator("div.react-date-picker__inputGroup").click();
    await page.locator("button.react-calendar__navigation__label").click();
    await page.locator("button.react-calendar__navigation__label").click();
    await page.getByText(year).nth(1).click();
  //  await page.locator("div.react-calendar__year-view__months").getByText(month).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.getByText(date).click();
 
    const input=await page.locator(".react-date-picker__inputGroup input");
    for(let i=0;i<await input.length;i++){
            const actual=await input[i].getAttribute("value");
            console.log(expect(actual).toEqual(expected[i]));    
            expect(actual).toEqual(expected[i]);
    }
   

})