
import { expect  } from 'chai'
import DefaultValues from "../constants/default-values";
import Synera_BatteryPackCalculator_Page from '../pageobjects/synera_batterypackcalculator_page';


/*

For this test case we are testing Run button so we will assume some value

There will be some values in input and there will be some values in output

after run compile succesfully we will compare with the precomputed values


Input 

Design Space :  Wedge (longer computation time)

Battery Cell Type : L34_C0.7

Cooling Plate height : 13

Spacing b/w cells : 6


This should be expected

Output : 
Number of Cells :712
Capacity : 1.974
Toatl Price : 1958
Total Weight :12.1

*/





describe('Run Button', () => {
    it('should compile output correctly', async () => {
        let page = new Synera_BatteryPackCalculator_Page();
      
        let pageLoaded= await  page.open();
   expect(pageLoaded).to.be.true;

   await page.IntializeInputComponents();
   await  page.IntitalizeOutputComponents();


let designspace_comboBox= page.designSpaceInputComboxBox;
let batterycelltype_comboBox = page.batteryCellInputComboBox;
 let coolingplate_slider = page.coolingplateSlider;
 let spacingcell_slider = page.spaceingcellsSlider;



 await designspace_comboBox.setComboBoxText("Wedge (longer computation time)");
 await batterycelltype_comboBox.setComboBoxText("L34_C0.7");
 await coolingplate_slider.setSliderValue("13")
 await spacingcell_slider.setSliderValue("6");


//debug value
console.log("Updated value of space Combo box", await designspace_comboBox.getComboBoxText())
console.log("Updated value of batterycellType Combo box", await batterycelltype_comboBox.getComboBoxText())
console.log("Updated value of coolingplate slider", await coolingplate_slider.getSliderText())
console.log("Updated value of spacingcell slider box", await spacingcell_slider.getSliderText())



 let run_button = page.runButton;
 await run_button.click();

let numberofCells = page.numberofcells_label;
let capacity = page.capacity_label;
let total_price = page.totalprice_label;
let total_weight = page.totalweight_label;




await page.waitForProgressIndicatorToDisappear();
const numberofCells_value = await numberofCells.getText();
const capacity_value = await  capacity.getText();
const total_price_value = await total_price.getText();
const total_weight_value = await total_weight.getText();
console.log("Current value of numebr_of_cells", numberofCells_value)
console.log("Current value of capacity", capacity_value);
console.log("Current value of total_price", total_price_value)
console.log("Current value of total_weight", total_weight_value)
expect(numberofCells_value).to.equal("712");
  expect(capacity_value).to.equal("1.794");
  expect(total_price_value).to.equal("1958");
  expect(total_weight_value).to.equal("12.1");
  
   
// console.log("label value",await page.numberofcells_label.getText() ,

//     await page.capacity_label.getText() , await page.totalprice_label.getText(),
//     await page.totalweight_label.getText()
// );

    })
})

