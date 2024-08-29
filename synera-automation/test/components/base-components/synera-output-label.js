
class SyneraOutputLabel{
    constructor(testId) {
        this.label = `[data-testid="${testId}"]`;
   
    }

    async getText()
    {
            const element = await browser.$(this.button);
            await element.waitForDisplayed();
            
            const labelelement = await element.$('.flex-0-1');

            return await labelelement.getText();      
    }
}
  



export default SyneraOutputLabel;