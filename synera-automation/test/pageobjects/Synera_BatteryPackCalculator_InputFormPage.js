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
