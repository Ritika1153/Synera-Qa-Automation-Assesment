
import SyneraInputFormSlider from "../../base-components/synera-inputform-slider";
class CoolingPlate_Slider extends SyneraInputFormSlider
{

    constructor(browser)
    {
        const coolingplate_testId = "input_Cooling Plate Height [mm]";
        super(coolingplate_testId ,browser);
    }
}
export default CoolingPlate_Slider;