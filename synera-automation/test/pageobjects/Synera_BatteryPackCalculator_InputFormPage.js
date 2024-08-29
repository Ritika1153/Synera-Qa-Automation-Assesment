import DesignSpaceInputComboBox from "../components/form-components/combo-boxes/designspace-input-comboBox";
import BatteryCellTypeInputComboBox from "../components/form-components/combo-boxes/batterycelltype_input-combobox";
import CoolingPlate_Slider from "../components/form-components/sliders/CoolingPlate-Slider";
import SpacingCells_Slider from "../components/form-components/sliders/SpacingCells-Slider";
import ResetButton from "../components/form-components/buttons/reset-button";
import Synera_BatteryPackCalculator_Page from "./synera_batterypackcalculator_page";
class Synera_BatteryPackCalculator_InputFormPage extends Synera_BatteryPackCalculator_Page {
 
    constructor()
    {
       super();
        this.designSpaceInputComboxBox= null;
        this.batteryCellInputComboBox = null;
        this.coolingplateSlider = null;
        this.spaceingcellsSlider = null;
        this.resetButton = null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     async Intialize()
    {
        this.designSpaceInputComboxBox = this.getDesignSpaceComboBox();
        this.batteryCellInputComboBox = this.getBatteryCellTypeComboBox();
        this.coolingplateSlider = this.getCoolingPlateSlider();
        this.spaceingcellsSlider = this.getSpaceCellsSlider();
        this.resetButton = this.getResetButton();
    }

    getResetButton()
    {
        return new ResetButton()
    }

    getCoolingPlateSlider()
    {
    return new CoolingPlate_Slider()
    }

    getSpaceCellsSlider()
    {
     return new SpacingCells_Slider()
    }

    getDesignSpaceComboBox() {
        return new DesignSpaceInputComboBox()
    }
    getBatteryCellTypeComboBox()
    {
        return new BatteryCellTypeInputComboBox();
    }

    
}

export default Synera_BatteryPackCalculator_InputFormPage;
