
import Synera_BatteryPackCaclulator_InputFormPage from "../pageobjects/Synera_BatteryPackCalculator_InputFormPage";
import { expect  } from 'chai'
import DefaultValues from "../constants/default-values";
describe('Reset Button', () => {
    it('should reset all input field to default values', async () => {
        
    let formInputPage = new Synera_BatteryPackCaclulator_InputFormPage();
   let pageLoaded= await formInputPage.open();
   expect(pageLoaded).to.be.true;
 
  await formInputPage.Intialize();

  //declare all components
let designspace_comboBox= formInputPage.designSpaceInputComboxBox;
let batterycelltype_comboBox = formInputPage.batteryCellInputComboBox;
 let coolingplate_slider = formInputPage.coolingplateSlider;
 let spacingcell_slider = formInputPage.spaceingcellsSlider;
 let resetButton = formInputPage.resetButton;

 //update values
 await designspace_comboBox.setComboBoxText("Panel (longer computation time)");
 await batterycelltype_comboBox.setComboBoxText("L52.4_C2.3");
 await coolingplate_slider.setSliderValue("19")
 await spacingcell_slider.setSliderValue("7");

// print values after update debug purpose

console.log("Updated value of space Combo box", await designspace_comboBox.getComboBoxText())
console.log("Updated value of batterycellType Combo box", await batterycelltype_comboBox.getComboBoxText())
console.log("Updated value of coolingplate slider", await coolingplate_slider.getSliderText())
console.log("Updated value of spacingcell slider box", await spacingcell_slider.getSliderText())

//click reset button to reset value
 await resetButton.click();


 // print values after Reset debug purpose

 const designspace_value = await  designspace_comboBox.getComboBoxText();
  const battery_cell_type_value =  await batterycelltype_comboBox.getComboBoxText();
  const cooling_plate_slider_value = await coolingplate_slider.getSliderText();
  const spacing_cell_slider_value = await spacingcell_slider.getSliderText();
console.log("Updated value of space Combo box after Reset", designspace_value)
console.log("Updated value of batterycellType Combo box after Reset",battery_cell_type_value)
console.log("Updated value of coolingplate slider after Reset", cooling_plate_slider_value)
console.log("Updated value of spacingcell slider box after Reset" , spacing_cell_slider_value)

 //Add Assertion to be equal to Default


  expect(designspace_value).to.equal(DefaultValues.DESIGN_SPACE);
  expect(battery_cell_type_value).to.equal(DefaultValues.BATTERY_CELL_TYPE);
  expect(cooling_plate_slider_value).to.equal(DefaultValues.COOLING_PLATE_HEIGHT);
  expect(spacing_cell_slider_value).to.equal(DefaultValues.SPACING_BTW_CELLS);
  

    });
  });
  