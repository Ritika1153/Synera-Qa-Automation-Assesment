
import NumberOfCellsLabel from "../components/form-components/labels/number-of-cells-label";
import Synera_BatteryPackCalculator_Page from "./synera_batterypackcalculator_page";
class Synera_BatteryPackCalculator_OutputPage  extends Synera_BatteryPackCalculator_Page {
 

    constructor()
    {
     super();
        this.numberofcells_label = null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     async Intialize()
    {
       this.numberofcells_label = getNumberofCellslabel();
    }

    getNumberofCellslabel()
    {
        return new NumberOfCellsLabel();
    }

       
}

export default Synera_BatteryPackCalculator_OutputPage;
