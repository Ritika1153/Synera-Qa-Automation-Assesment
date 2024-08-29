import DesignSpaceInputComboBox from "../components/form-components/combo-boxes/designspace-input-comboBox";
import BatteryCellTypeInputComboBox from "../components/form-components/combo-boxes/batterycelltype_input-combobox";
import CoolingPlate_Slider from "../components/form-components/sliders/CoolingPlate-Slider";
import SpacingCells_Slider from "../components/form-components/sliders/SpacingCells-Slider";
import ResetButton from "../components/form-components/buttons/reset-button";
import NumberOfCellsLabel from "../components/form-components/labels/number-of-cells-label";
import TotalPriceLabel from "../components/form-components/labels/total-price-label";
import TotalWeightLabel from "../components/form-components/labels/total-weight-label";
import CapacityLabel from "../components/form-components/labels/capacity-label";
import Synera_BatteryPackCalculator_BasePage from "./synera_batterypackcalculator_base_page";
import RunButton from "../components/form-components/buttons/run-button";
class Synera_BatteryPackCalculator_Page extends Synera_BatteryPackCalculator_BasePage {
 
    constructor()
    {
       super();
        this.designSpaceInputComboxBox= null;
        this.batteryCellInputComboBox = null;
        this.coolingplateSlider = null;
        this.spaceingcellsSlider = null;
        this.resetButton = null;
        this.numberofcells_label = null;
        this.capacity_label = null;
        this.totalprice_label= null;
        this.totalweight_label= null;
        this.runButton = null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     async IntializeInputComponents()
    {
        this.designSpaceInputComboxBox = this.getDesignSpaceComboBox();
        this.batteryCellInputComboBox = this.getBatteryCellTypeComboBox();
        this.coolingplateSlider = this.getCoolingPlateSlider();
        this.spaceingcellsSlider = this.getSpaceCellsSlider();
        this.resetButton = this.getResetButton();
        
    }
    async IntitalizeOutputComponents()
    {
        this.numberofcells_label =  this.getNumberofCellslabel();
        this.capacity_label = this.getCapacitylabel();
        this.totalprice_label = this.getTotalPricelabel();
        this.totalweight_label = this.getTotalWeightlabel();
        this.runButton = this.getRunButton();
    }


    getRunButton()
    {
        return new RunButton()
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

    
    getNumberofCellslabel()
    {
        return new NumberOfCellsLabel();
    }

    getCapacitylabel(){

        return new CapacityLabel();
    }

    getTotalPricelabel()
    {
        return new TotalPriceLabel();
    }

    getTotalWeightlabel()
    {
        return new TotalWeightLabel();
    }
}

export default Synera_BatteryPackCalculator_Page;
