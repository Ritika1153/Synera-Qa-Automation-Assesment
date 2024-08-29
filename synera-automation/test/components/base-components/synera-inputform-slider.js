class SyneraInputFormSlider{
    constructor(testId) {
        this.slider = `[data-testid="${testId}"]`;

    }

    async getSliderText() {

        const sliderComponent = await browser.$(this.slider);
        
        await sliderComponent.waitForDisplayed();

        const sliderValueComponent = await sliderComponent.$('.slider-label');

       await sliderValueComponent.waitForDisplayed();

        let text= await sliderValueComponent.getText();
        return text;
    }

    async setSliderValue(value) {
        const sliderInput = await browser.$(this.slider);
        await sliderInput.waitForDisplayed();

        await sliderInput.click();

        const sliderThumb = await sliderInput.$('.v-slider-thumb');
        await sliderThumb.waitForDisplayed();
        await sliderThumb.click();

       
        const currentValue = parseInt(await this.getSliderText());
        const newValue = parseInt(value)
      
        const delta = newValue - currentValue;
  
       
        for (let i = 0; i < Math.abs(delta); i++) {
            await browser.keys([delta > 0 ? 'ArrowRight' : 'ArrowLeft']);
        }

        await sliderThumb.click();
      
    }
    
    }

export default SyneraInputFormSlider;
