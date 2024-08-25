import SyneraInputFormComboBox from "./SyneraInputFormComboBox";
class BatteryCellTypeInputComboBox extends SyneraInputFormComboBox
{    
    constructor(browser)
    {
        const  battery_cell_type_Id= "input_Battery Cell Type";
        super(battery_cell_type_Id,browser);
    }
}
export default BatteryCellTypeInputComboBox;