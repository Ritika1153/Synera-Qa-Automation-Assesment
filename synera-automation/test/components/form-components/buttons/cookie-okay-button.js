import SyneraInputFormButton from "../../base-components/synera-inputform-button";


class CookieOkButton extends SyneraInputFormButton{

    constructor(browser)
    {
        const resetButton_testId = "btnOkay";
        super(resetButton_testId ,browser);  
    }
}

export default CookieOkButton;