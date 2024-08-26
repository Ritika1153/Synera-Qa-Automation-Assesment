class SyneraInputFormSlider{
    constructor(testId,browser) {
        this.slider = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async getsliderText() {

     
        const autocompleteComponent = await browser.$(this.slider);
        
        await autocompleteComponent.waitForDisplayed();

        const autocompleteTextElement = await autocompleteComponent.$('.slider-label');

        await autocompleteTextElement.waitForDisplayed();

        let text= await autocompleteTextElement.getText();
        console.log("Slider Text",text)
        return text;
    }
}
export default SyneraInputFormSlider;