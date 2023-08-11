import clsx from 'clsx';
import React, { useRef, useEffect } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './scratchblocks.module.css';

export default function ScratchBlocks({
    children, style="scratch3", scale=-1, inline=false, languages=["en"]
}){
    return <BrowserOnly>
        {() => {
            const scratchblocks = require("scratchblocks").default;

            const codeRef = useRef(null);

            useEffect(() => {
                if(scale === -1){
                    if(style === "scratch2"){
                        scale = 1;
                    }else if(style.startsWith("scratch3")){
                        scale = 0.675;
                    }
                }

                const options = {style, scale, inline, languages}
                const code = scratchblocks.read(codeRef.current, options);
                const doc = scratchblocks.parse(code, options);
                const svg = scratchblocks.render(doc, options);
                scratchblocks.replace(codeRef.current, svg, doc, options);
            }, []);
            
            return <pre ref={codeRef} className={clsx(styles.scratchBlocksContainer)}>
                {children}
            </pre>;
        }}
    </BrowserOnly>
};