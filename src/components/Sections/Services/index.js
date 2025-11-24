import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import './styleMobile.css';
import imgService1 from '../../../assets/photo1.png';
import { CardService } from '../../Cards/CardService';
export function Services() {
    return (_jsxs("section", { className: 'section-services', children: [_jsxs("div", { className: 'container-services-info', children: [_jsx("h2", { children: "Servi\u00E7os Dispon\u00EDveis" }), _jsx("p", { children: "Conhe\u00E7a os servi\u00E7os que oferecemos para voc\u00EA e sua empresa" })] }), _jsxs("div", { className: 'container-cards-services', children: [_jsx(CardService, { className: 'card-service', img: imgService1, titulo: 'Desenvolvimento de Websites', descricao: 'Desenvolvimento de Websites modernos e responsivos utilizando o que h\u00E1 de mais novo no mercado se tratando de tecnologias' }), _jsx(CardService, { className: 'card-service', img: imgService1, titulo: 'Desenvolvimento de Agentes de IA', descricao: 'Desenvolvimento de agentes para atendimento e disponibiliza\u00E7\u00E3o de informa\u00E7\u00F5es direto no site, e agendamento de horarios para seu negocio via google calendar' })] })] }));
}
