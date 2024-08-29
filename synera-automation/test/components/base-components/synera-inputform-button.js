
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
}
  



export default SyneraInputFormButton;