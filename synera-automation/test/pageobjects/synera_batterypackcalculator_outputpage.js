
import CapacityLabel from "../components/form-components/labels/capacity-label";
import NumberOfCellsLabel from "../components/form-components/labels/number-of-cells-label";
import TotalPriceLabel from "../components/form-components/labels/total-price-label";
import TotalWeightLabel from "../components/form-components/labels/total-weight-label";
import Synera_BatteryPackCalculator_Page from "./synera_batterypackcalculator_page";
class Synera_BatteryPackCalculator_OutputPage  extends Synera_BatteryPackCalculator_Page {
 

    constructor()
    {
     super();
        this.numberofcells_label = null;
        this.capacity_label = null;
        this.totalprice_label= null;
        this.totalweight_label= null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     async Intialize()
    {
       this.numberofcells_label =  this.getNumberofCellslabel();
       this.capacity_label = this.getCapacitylabel();
       this.totalprice_label = this.getTotalPricelabel();
       this.totalweight_label = this.getTotalWeightlabel();
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

export default Synera_BatteryPackCalculator_OutputPage;
