import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import { DefaultButton } from '../../Buttons/DefaultButton';
export function CardSolutions({ img, titulo, descricao, className }) {
    return (_jsxs("div", { className: `card-solutions ${className ?? ''}`, children: [_jsx("img", { src: img, alt: "" }), _jsxs("div", { className: 'card-solutions-infos', children: [_jsx("span", { children: titulo }), _jsx("p", { children: descricao })] }), _jsx(DefaultButton, { className: 'btn-cards-solution-view', text: 'Veja' })] }));
}
