class TutorialModDialogsBlocks {
    constructor (runtime){
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            tutorialmod_dialogs_alert: this.alertBlock,
            tutorialmod_dialogs_prompt: this.promptBlock,
            tutorialmod_dialogs_confirm: this.confirmBlock
        };
    }

    alertBlock(args, util) {
        alert(args.MESSAGE);
    }

    promptBlock(args, util) {
        return prompt(args.MESSAGE);
    }

    confirmBlock(args, util) {
        return confirm(args.MESSAGE);
    }
}

module.exports = TutorialModDialogsBlocks;