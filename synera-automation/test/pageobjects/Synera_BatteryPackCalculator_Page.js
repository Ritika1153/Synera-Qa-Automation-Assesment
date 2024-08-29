import { browser } from '@wdio/globals';
import CookieOkButton from '../components/form-components/buttons/cookie-okay-button';
const url = "https://run.synera.io/frontend/?workflow=Fu5d28Th65Rx0HtB0OI9fnpfwMkmf9w8JZE8vja4bqA&auth=cmVhZG9ubHk6bHUwcFJzMHdRQkpaTVN6YThXd0h4TW4xRklLeUdtc2g=";

class Synera_BatteryPackCalculator_Page {
    async open() {
        try {
            await browser.url(url);
            await this.closeCookieSection();
            const pageLoaded = await this.waitForPageLoad();

            await this.closeToolTip();
            return pageLoaded;
        } catch (error) {
            console.error('Failed to open page:', error.message);
            return false;
        }
    }

    async closeCookieSection()
    {
        const button  = new CookieOkButton(browser);
       await button.clickIfDisplayed();
    }
    async closeToolTip()
    {
        const closeButtonSelector = 'img.synera-gripper-tooltip-close';
        const closeButton = await browser.$(closeButtonSelector);
        
        const isButtonVisible = await closeButton.isDisplayed();
        if (isButtonVisible) 
            await closeButton.click();
    }
    async waitForPageLoad() {
        const loadingOverlay = await browser.$('div.v-overlay--active');

        try {
            await browser.waitUntil(async () => {
                const isDisplayed = await loadingOverlay.isDisplayed();
                console.log("IsDisplayed:", isDisplayed);
                return !isDisplayed; 
            }, {
                timeout: 30000, // Increase timeout if necessary
                interval: 500,
                timeoutMsg: 'Loading overlay did not disappear within the expected time.'
            });

            console.log('Page has finished loading.');
            return true;
        } catch (error) {
            console.error('Error while waiting for page load:', error.message);
            return false;
        }
    }
}

export default Synera_BatteryPackCalculator_Page;
