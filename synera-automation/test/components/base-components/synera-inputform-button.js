
class SyneraInputFormButton{
    constructor(testId) {
        this.button = `[data-testid="${testId}"]`;
    }

    async click() {
        try {
            const element = await $(this.button);
            await element.waitForDisplayed();
            await element.click();
           
           
        } catch (error) {
            console.error("Error occurred while clicking the button:", error);
        }
    }
    async clickIfDisplayed()
    {
        try {
            const button= await $(this.button);
            const isButtonDisplayed = await button.isDisplayed();
            if(isButtonDisplayed)
                button.click();

           
        } catch (error) {
            console.error("Error occurred while clicking the button:", error);
        }
    }

    async Toggle()
    {
      
        const switchElement = await browser.$(this.button);
        const inputControl = await switchElement.$('.v-input__control')
        const toggleButtton  = await inputControl.$('.v-switch__track')
        await inputControl.click();
    }

   
}
  



export default SyneraInputFormButton;