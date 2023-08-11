'use strict';

goog.provide('Blockly.Blocks.dialogs');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['tutorialmod_dialogs_alert'] = {
  /**
   * @this Blockly.Block
   */
  init: function(){
    this.jsonInit({
      "message0": Blockly.Msg.TUTORIALMOD_DIALOGS_ALERT, 
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.dialogs,
      "extensions": ["colours_dialogs", "shape_statement"]
    });
  }
};