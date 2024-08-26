class SyneraInputFormComboBox{
    constructor(testId,browser) {
        this.comboBox = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async getComboBoxText() {

     
        const autocompleteComponent = await browser.$(this.comboBox);
        
        await autocompleteComponent.waitForDisplayed();

        const autocompleteTextElement = await autocompleteComponent.$('.v-autocomplete__selection .v-autocomplete__selection-text');

        await autocompleteTextElement.waitForDisplayed();

        let text= await autocompleteTextElement.getText();
        console.log("debug test",text)
        return text;
    }
}
export default SyneraInputFormComboBox;