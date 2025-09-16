import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "singhgourav.dev@gmail.com";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <motion.button onClick={copyToClipboard} 
        whileHover={{y:-5}}
        whileTap={{scale:1.05}}
        className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait"/>
            {copied ? (
                <motion.p 
                initial={{opacity:0,y:-10}}
                keys="copied"
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-10}}
                transition={{duration:0.1,ease:"easeInOut"}}
                className="flex items-center justify-center gap-2">
                    <img src="assets/copy-done.svg" alt="Copy Done Icon" className="w-5" />
                    Email has copied!</motion.p>
            ) :
                (<motion.p 
                keys="copy"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:0.1}}
                className="flex items-center justify-center gap-2">
                    <img src="assets/copy.svg" alt="Copy Icon" className="w-5" />
                    Copy Email Address</motion.p>)}
        </motion.button>
    )
}

export default CopyEmailButton
