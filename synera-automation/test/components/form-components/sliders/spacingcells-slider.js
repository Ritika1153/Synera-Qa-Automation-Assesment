
import SyneraInputFormSlider from "../../base-components/synera-inputform-slider";
class SpacingCells_Slider extends SyneraInputFormSlider
{

    constructor(browser)
    {
        const spacingcells_testId = "input_Spacing Between Cells [mm]";
        super(spacingcells_testId ,browser);
    }
}
export default SpacingCells_Slider;