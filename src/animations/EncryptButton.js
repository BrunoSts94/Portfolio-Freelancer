import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";
const EncryptButton = ({ label, className, onClick }) => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(label);
    const scramble = () => {
        let pos = 0;
        intervalRef.current = setInterval(() => {
            const scrambled = label
                .split("")
                .map((char, index) => {
                if (pos / CYCLES_PER_LETTER > index)
                    return char;
                const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                return randomChar;
            })
                .join("");
            setText(scrambled);
            pos++;
            if (pos >= label.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };
    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(label);
    };
    return (_jsxs(motion.button, { whileHover: { scale: 1.025 }, whileTap: { scale: 0.975 }, onMouseEnter: scramble, onMouseLeave: stopScramble, onClick: onClick, className: `group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 ${className}`, children: [_jsx("div", { className: "relative z-10 flex items-center gap-2", children: _jsx("span", { children: text }) }), _jsx(motion.span, { initial: { y: "100%" }, animate: { y: "-100%" }, transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }, className: "duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100" })] }));
};
export default EncryptButton;
