class SyneraInputFormComboBox{
    constructor(testId) {
        this.component = $(`[data-testid="${testId}"]`);
    }

    async getAutocompleteText() {
        await this.component.waitForDisplayed();

        const autocompleteTextElement = await this.component.$('.v-autocomplete__selection .v-autocomplete__selection-text');

        await autocompleteTextElement.waitForDisplayed();

        return await autocompleteTextElement.getText();
    }
}
