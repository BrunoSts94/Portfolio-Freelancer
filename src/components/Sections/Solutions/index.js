import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import './styleMobile.css';
import { CardSolutions } from '../../Cards/CardSolutions';
import site1 from '../../../assets/photo1.png';
export function Solutions() {
    return (_jsx("section", { className: 'section-solutions', children: _jsx("div", { className: 'container-section-solutions', children: _jsxs("div", { className: 'container-solutions-exists', children: [_jsx("h2", { children: "Vamos criar seu site?" }), _jsx("p", { children: "Escolha entre modelos de sucesso ja desenvolvidos, ou solte sua imagina\u00E7\u00E3o e vamos criar algo novo e totalmente \u00FAnico para seu neg\u00F3cio." }), _jsxs("div", { className: 'container-section-solutions-cards', children: [_jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' }), _jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' }), _jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' }), _jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' }), _jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' }), _jsx(CardSolutions, { img: site1, titulo: 'Projeto A', descricao: 'Projeto desenvolvido para a empresa A' })] })] }) }) }));
}
