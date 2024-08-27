import DesignSpaceInputComboBox from "../components/form-components/sliders/combo-boxes/designspace-input-comboBox";
import Synera_BatteryPackCalculator_Page from "./synera_batterypackcalculator_page";
import BatteryCellTypeInputComboBox from "../components/form-components/sliders/combo-boxes/batterycelltype_input-combobox";
import CoolingPlate_Slider from "../components/form-components/sliders/CoolingPlate-Slider";
import SpacingCells_Slider from "../components/form-components/sliders/SpacingCells-Slider";
class Synera_BatteryPackCalculator_InputFormPage extends Synera_BatteryPackCalculator_Page {
 
    constructor()
    {
        super();
        this.designSpaceInputComboxBox= null;
        this.batteryCellInputComboBox = null;
        this.coolingplateSlider = null;
        this.spaceingcellsSlider = null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     async Intialize()
    {
        this.designSpaceInputComboxBox = this.getDesignSpaceComboBox();
        this.batteryCellInputComboBox = this.getBatteryCellTypeComboBox();
        this.coolingplateSlider = this.getCoolingPlateSlider();
        this.spaceingcellsSlider = this.getSpaceCellsSlider();
    }

    getCoolingPlateSlider()
    {
    return new CoolingPlate_Slider(this.browser)
    }

    getSpaceCellsSlider()
    {
     return new SpacingCells_Slider(this.browser)
    }

    getDesignSpaceComboBox() {
        return new DesignSpaceInputComboBox(this.browser)
    }
    getBatteryCellTypeComboBox()
    {
        return new BatteryCellTypeInputComboBox(this.browser);
    }

    
}

export default Synera_BatteryPackCalculator_InputFormPage;
