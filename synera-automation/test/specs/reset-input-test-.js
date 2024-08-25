
const url ="https://run.synera.io/frontend/?workflow=Fu5d28Th65Rx0HtB0OI9fnpfwMkmf9w8JZE8vja4bqA&auth=cmVhZG9ubHk6bHUwcFJzMHdRQkpaTVN6YThXd0h4TW4xRklLeUdtc2g="
describe('Fetch Autocomplete Text Using data-testid', () => {
    it('should get text from autocomplete component using data-testid', async () => {
      await browser.url(url); // Navigate to the page where the component is
  
      // Locate the component using data-testid
      const autocompleteComponent = await browser.$('[data-testid="slt7dc378ce-b72f-4997-9c35-9973bee081d3"]');
  
      // Ensure the component is displayed
      await autocompleteComponent.waitForDisplayed();
  
      // Locate the autocomplete text within the component
      const autocompleteTextElement = await autocompleteComponent.$('.v-autocomplete__selection .v-autocomplete__selection-text');
  
      // Ensure the text element is displayed
      await autocompleteTextElement.waitForDisplayed();
  
      // Fetch the text content
      const autocompleteText = await autocompleteTextElement.getText();
  
      console.log(autocompleteText);  // Outputs: Box
    });
  });
  