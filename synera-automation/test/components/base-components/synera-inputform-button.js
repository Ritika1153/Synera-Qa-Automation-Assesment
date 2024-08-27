
class SyneraInputFormButton{
    constructor(testId, browser) {
        this.button = `[data-testid="${testId}"]`;
        this.browser = browser;
    }

    async click() {
        const element = await browser.$(this.button);
        await element.click();
    }

}
export default SyneraInputFormButton;