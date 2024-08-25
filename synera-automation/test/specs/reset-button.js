
import Synera_BatteryPackCaclulator_InputFormPage from "../pageobjects/Synera_BatteryPackCalculator_InputFormPage";
import { expect  } from 'chai'
describe('Reset Button', () => {
    it('should reset all input field to default values', async () => {
        
   let page = new Synera_BatteryPackCaclulator_InputFormPage();
    
   await page.open();

   let formInputPage = new Synera_BatteryPackCaclulator_InputFormPage();
   formInputPage.Intialize();

  let designspace_text = await formInputPage.designSpaceInputComboxBox.getComboBoxText();
  let batterycelltype_text = await formInputPage.batteryCellInputComboBox.getComboBoxText();
  
  
  expect(designspace_text).to.equal("Box");
  expect(batterycelltype_text).to.equal("L65.15_C2.5");



    });
  });
  