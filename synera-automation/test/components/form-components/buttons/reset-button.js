import SyneraInputFormButton from "../../base-components/synera-inputform-button";


class ResetButton extends SyneraInputFormButton{

    constructor(browser)
    {
        const resetButton_testId = "reset_inputs_button";
        super(resetButton_testId ,browser);  
    }
}

export default ResetButton;