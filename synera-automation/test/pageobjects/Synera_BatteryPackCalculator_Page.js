import { browser } from '@wdio/globals'

const url  = "https://run.synera.io/frontend/?workflow=Fu5d28Th65Rx0HtB0OI9fnpfwMkmf9w8JZE8vja4bqA&auth=cmVhZG9ubHk6bHUwcFJzMHdRQkpaTVN6YThXd0h4TW4xRklLeUdtc2g="

 class Synera_BatteryPackCalculator_Page {
 
   async open () {
        this.browser =  await browser.url(url)
    
    }
}
export default Synera_BatteryPackCalculator_Page;
