class SyneraInputFormComboBox{
    constructor(testId) {
        this.comboBox = $(`[data-testid="${testId}"]`);
    }

    async getComboBoxText() {
        await this.comboBox.waitForDisplayed();

        const autocompleteTextElement = await this.comboBox.$('.v-autocomplete__selection .v-autocomplete__selection-text');

        await autocompleteTextElement.waitForDisplayed();

        return await autocompleteTextElement.getText();
    }
}
export default SyneraInputFormComboBox;