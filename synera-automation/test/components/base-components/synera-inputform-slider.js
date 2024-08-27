class SyneraInputFormSlider{
    constructor(testId,browser) {
        this.slider = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async getSliderText() {

     
        const autocompleteComponent = await browser.$(this.slider);
        
        await autocompleteComponent.waitForDisplayed();

        const autocompleteTextElement = await autocompleteComponent.$('.slider-label');

        await autocompleteTextElement.waitForDisplayed();

        let text= await autocompleteTextElement.getText();
        console.log("Slider Text",text)
        return text;
    }

    async setSliderValue(value) {
        const sliderInput = await browser.$(this.slider);
        await sliderInput.waitForDisplayed();

        await sliderInput.click();

        const sliderThumb = await sliderInput.$('.v-slider-thumb');
        await sliderThumb.waitForDisplayed();
        await sliderThumb.click();

        // Get the current value of the slider
        const currentValue = parseInt(await this.getSliderText());
        const newValue = parseInt(value)
        // Calculate the number of arrow key presses needed
        const delta = newValue - currentValue;
        
        // Simulate arrow key presses
        for (let i = 0; i < Math.abs(delta); i++) {
            await browser.keys([delta > 0 ? 'ArrowRight' : 'ArrowLeft']);
        }

        // Wait for the slider to update and verify
        await browser.pause(500);
      
    }
    
    }

export default SyneraInputFormSlider;
