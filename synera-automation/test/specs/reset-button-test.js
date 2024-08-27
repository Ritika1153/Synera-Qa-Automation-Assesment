
import Synera_BatteryPackCaclulator_InputFormPage from "../pageobjects/Synera_BatteryPackCalculator_InputFormPage";
import { expect  } from 'chai'
describe('Reset Button', () => {
    it('should reset all input field to default values', async () => {
        
      let formInputPage = new Synera_BatteryPackCaclulator_InputFormPage();
    
   let pageLoaded= await formInputPage.open();
   expect(pageLoaded).to.be.true;
 
  await formInputPage.Intialize();

  let designspace_comboBox= formInputPage.designSpaceInputComboxBox;
    let batterycelltype_text = formInputPage.batteryCellInputComboBox;
 let coolingplate_value = formInputPage.coolingplateSlider;
 let spacingcell_value = formInputPage.spaceingcellsSlider.getsliderText();
//let text = "Wedge (longer computation time)";
console.log("old value",await coolingplate_value.getSliderText());

//await designspace_comboBox.setComboBoxText(text);


await coolingplate_value.setSliderValue(10)
console.log("new value",await coolingplate_value.getSliderText());

// expect(batterycelltype_text).to.equal("L65.15_C2.5");
//   expect(coolingplate_value).to.equal("8");
//   expect(spacingcell_value).to.equal("2");
  

    });
  });
  