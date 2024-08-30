import Synera_BatteryPackCalculator_Page from "../pageobjects/synera_batterypackcalculator_page";
import { expect } from "chai";

import path from 'path';

// For this test case we are testing CANCAS so we will assume some value

// There will be some values in input and based on input value the canvas will generate diagram

// We will compare the screenshot of diagram

// Input 

// Design Space : Box

// Battery Cell Type : L50_C1.1

// Cooling Plate height : 12

// Spacing b/w cells : 4






describe('Visual Testing for Canvas Diagram', () => {
    it('should compare screenshot of canvas with baseline', async () => {
      // Open the page you want to test
        let page = new Synera_BatteryPackCalculator_Page();
    let pageLoaded= await page.open();
    expect(pageLoaded).to.be.true;
   

await page.IntializeInputComponents();
await page.IntitalizeOutputComponents();
      let designspace_comboBox= page.designSpaceInputComboxBox;
let batterycelltype_comboBox = page.batteryCellInputComboBox;
 let coolingplate_slider = page.coolingplateSlider;
 let spacingcell_slider = page.spaceingcellsSlider;



 await designspace_comboBox.setComboBoxText("Box");
 await batterycelltype_comboBox.setComboBoxText("L50_C1.1");
 await coolingplate_slider.setSliderValue("12")
 await spacingcell_slider.setSliderValue("4");


//debug value
console.log("Updated value of space Combo box", await designspace_comboBox.getComboBoxText())
console.log("Updated value of batterycellType Combo box", await batterycelltype_comboBox.getComboBoxText())
console.log("Updated value of coolingplate slider", await coolingplate_slider.getSliderText())
console.log("Updated value of spacingcell slider box", await spacingcell_slider.getSliderText())



 let run_button = page.runButton;
 await run_button.click();

 await page.waitForProgressIndicatorToDisappear();

await browser.pause(10000);

 const component = await browser.$('[id="runtime-viewer"]'); // Replace '#element-id' with your actual element selector
await component.waitForDisplayed();

 const result = await browser.checkElement(component, "canvas-battery");
   
 console.log('result',result)
      
  expect(result).to.be.lessThan(3); // the value be changed
  
    });
  });
  