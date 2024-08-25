import SyneraInputFormComboBox from "./SyneraInputFormComboBox";
class BatteryCellTypeInputComboBox extends SyneraInputFormComboBox
{    
    constructor(browser)
    {
        const  battery_cell_type_Id= "slt4690e9ab-db11-4100-ba95-0306a4915182";
        super(battery_cell_type_Id,browser);
    }
}
export default BatteryCellTypeInputComboBox;