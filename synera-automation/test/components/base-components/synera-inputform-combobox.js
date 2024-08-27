class SyneraInputFormComboBox {
    constructor(testId, browser) {
        this.comboBox = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async getComboBoxText() {
        const autocompleteComponent = await browser.$(this.comboBox);
        await autocompleteComponent.waitForDisplayed();

        const autocompleteTextElement = await autocompleteComponent.$('.v-autocomplete__selection .v-autocomplete__selection-text');
        await autocompleteTextElement.waitForDisplayed();

        const text = await autocompleteTextElement.getText();
        console.log("Retrieved ComboBox text:", text);
        return text;
    }

    async setComboBoxText(newText) {
        const autocompleteComponent = await browser.$(this.comboBox);
        await autocompleteComponent.waitForDisplayed();

        const dropdownTrigger = await autocompleteComponent.$('.v-autocomplete__menu-icon');
        if (await dropdownTrigger.isDisplayed()) {
            await dropdownTrigger.click();
        }

        const inputField = await autocompleteComponent.$('input');
        await inputField.waitForDisplayed();

        await browser.execute(function(input) {
            input.value = '';
        }, inputField);

        // Set the new value
        await inputField.setValue(newText);

        await browser.pause(500);  

        await browser.keys(['ArrowDown']); 
        await browser.keys(['Enter']);     
    
        console.log(`ComboBox text set to: ${newText}`);
    }
}

export default SyneraInputFormComboBox;
