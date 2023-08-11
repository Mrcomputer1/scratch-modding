const formatMessage = require("format-message");
const BlockType = require("../../extension-support/block-type");
const ArgumentType = require("../../extension-support/argument-type");

class TutorialModDialogsExtension{
    constructor (runtime){
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: "jsdialogs",
            name: formatMessage({
                id: "dialogs.categoryName",
                default: "Dialogs",
                description: "Name of the Dialogs extension."
            }),
            blockIconURI: "",
            menuIconURI: "",
            blocks: [
                {
                    opcode: "js_alert",
                    text: formatMessage({
                        id: "dialogs.alertBlock",
                        default: "alert [MESSAGE]",
                        description: "Alert dialog"
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: "dialogs.hello",
                                default: "Hello!",
                                description: "Hello!"
                            })
                        }
                    }
                },
                {
                    opcode: "js_prompt",
                    text: formatMessage({
                        id: "dialogs.promptBlock",
                        default: "prompt [MESSAGE]",
                        description: "Prompt dialog"
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: "dialogs.hello",
                                default: "Hello!",
                                description: "Hello!"
                            })
                        }
                    }
                },
                {
                    opcode: "js_confirm",
                    text: formatMessage({
                        id: "dialogs.confirmBlock",
                        default: "confirm [MESSAGE]",
                        description: "Confirm dialog"
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: "dialogs.hello",
                                default: "Hello!",
                                description: "Hello!"
                            })
                        }
                    }
                }
            ]
        };
    }

    js_alert (args, util){
        alert(args.MESSAGE);
    }

    js_prompt (args, util){
        return prompt(args.MESSAGE);
    }

    js_confirm (args, util){
        return confirm(args.MESSAGE);
    }
}

module.exports = TutorialModDialogsExtension;