import DesignSpaceInputComboBox from "../components/DesginSpace_InputComboBox";
import Synera_BatteryPackCalculator_Page from "./Synera_BatteryPackCalculator_Page";
import BatteryCellTypeInputComboBox from "../components/BatteyCellType_InputComboBox";
class Synera_BatteryPackCalculator_InputFormPage extends Synera_BatteryPackCalculator_Page {
 
    constructor()
    {
        super();
        this.designSpaceInputComboxBox= null;
        this.batteryCellInputComboBox = null;
    }

    // create seperate method intialize because the browser must be intialized before calling this thats why not called in consturctor
     Intialize()
    {
        this.designSpaceInputComboxBox = this.getDesignSpaceComboBox();
        this.batteryCellInputComboBox = this.getBatteryCellTypeComboBox();
    }

    getDesignSpaceComboBox() {
        return new DesignSpaceInputComboBox(this.browser)
    }
    getBatteryCellTypeComboBox()
    {
        return new BatteryCellTypeInputComboBox();
    }

}

export default Synera_BatteryPackCalculator_InputFormPage;
