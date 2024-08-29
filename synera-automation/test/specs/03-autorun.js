
import { expect  } from 'chai'

import Synera_BatteryPackCalculator_Page from '../pageobjects/synera_batterypackcalculator_page';


/*

This is a autorun test case in which we will test the auto run functionality 

so for this we will take input 
Design Space and

Auto Run is On : 
Input 

Design Space :  Box

//Changing this
Battery Cell Type : L38.5_C1.3

Cooling Plate height : 8

Spacing b/w cells : 2



This should be expected

Output : 
Number of Cells :500
Capacity : 2.34
Toatl Price : 3475
Total Weight :13



Now lets change the cooling plate_height to 9 from 8


*/





describe('Auto Run', () => {
    it('should run whenever value changes', async () => {
        let page = new Synera_BatteryPackCalculator_Page();
      
        let pageLoaded= await  page.open();
   expect(pageLoaded).to.be.true;

   await page.IntializeInputComponents();
   await  page.IntitalizeOutputComponents();


   let autoRun = page.autoRunButton;
   await autoRun.Toggle()
 let batterycelltype_comboBox = page.batteryCellInputComboBox;

 await batterycelltype_comboBox.setComboBoxText("L38.5_C1.3");

 await page.waitForProgressIndicatorToDisappear();


let numberofCells = page.numberofcells_label;
let capacity = page.capacity_label;
let total_price = page.totalprice_label;
let total_weight = page.totalweight_label;

const numberofCells_value = await numberofCells.getText();
const capacity_value = await  capacity.getText();
const total_price_value = await total_price.getText();
const total_weight_value = await total_weight.getText();
console.log("Current value of numebr_of_cells", numberofCells_value)
console.log("Current value of capacity", capacity_value);
console.log("Current value of total_price", total_price_value)
console.log("Current value of total_weight", total_weight_value)
expect(numberofCells_value).to.equal("500");
  expect(capacity_value).to.equal("2.34");
  expect(total_price_value).to.equal("3475");
  expect(total_weight_value).to.equal("13");


  

    })
})

