import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import EletricBorder from '../../../animations/EletricBorder/EletricBorder';
export function CardService({ img, titulo, descricao, className }) {
    return (_jsx(EletricBorder, { color: "#a251f3", speed: 1, chaos: 0.8, thickness: 3, style: { borderRadius: 28 }, className: `eletric ${className ?? ''}`, children: _jsxs("div", { className: 'conatiner-card-service', children: [_jsx("img", { src: img, alt: "imagem do servi\u00E7o" }), _jsxs("div", { className: 'section-card-service-info', children: [_jsx("h3", { children: titulo }), _jsx("p", { children: descricao })] })] }) }));
}
