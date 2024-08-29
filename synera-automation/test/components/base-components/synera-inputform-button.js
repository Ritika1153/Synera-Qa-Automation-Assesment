
class SyneraInputFormButton{
    constructor(testId, browser) {
        this.button = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async click() {
        try {
            const element = await browser.$(this.button);
            await element.waitForDisplayed();
            await element.click();

           
        } catch (error) {
            console.error("Error occurred while clicking the button:", error);
        }
    }
    async clickIfDisplayed()
    {
        try {
            const button= await browser.$(this.button);
            const isButtonDisplayed = await button.isDisplayed();
            if(isButtonDisplayed)
                button.click();

           
        } catch (error) {
            console.error("Error occurred while clicking the button:", error);
        }
    }
}
  



export default SyneraInputFormButton;