import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import './styleMobile.css';
import { motion } from "framer-motion";
import { DefaultButton } from '../../Buttons/DefaultButton';
import icone1 from '../../../assets/icone.png';
export function Clients() {
    const logos = [icone1, icone1, icone1, icone1, icone1, icone1, icone1, icone1, icone1];
    return (_jsx("section", { className: 'section-clients', children: _jsxs("div", { className: 'container-section-clients', children: [_jsx("h2", { children: "Clientes que ja elevaram sua presen\u00E7a com nossos servi\u00E7os" }), _jsx("div", { className: 'container-clients-icons', children: _jsx(motion.div, { className: "motion-div", animate: { x: ["0%", "-50%"] }, transition: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }, children: logos.concat(logos).map((logo, index) => (_jsx("img", { src: logo, alt: "tech", className: "icon-client" }, index))) }) }), _jsx("p", { children: "Venha fazer fazer parte da nossa hist\u00F3ria voce tamb\u00E9m!" }), _jsx(DefaultButton, { text: 'Quero criar meu Site' })] }) }));
}
