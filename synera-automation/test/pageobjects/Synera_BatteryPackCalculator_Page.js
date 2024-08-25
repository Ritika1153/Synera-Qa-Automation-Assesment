import { browser } from '@wdio/globals'

const url  = "https://run.synera.io/frontend/?workflow=Fu5d28Th65Rx0HtB0OI9fnpfwMkmf9w8JZE8vja4bqA&auth=cmVhZG9ubHk6bHUwcFJzMHdRQkpaTVN6YThXd0h4TW4xRklLeUdtc2g="

export default class Synera_BatteryPackCalculator_Page {
    open (path) {
        return browser.url(url)
    }
}
