import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import photo1 from '../../../assets/photo1.png';
import photo2 from '../../../assets/photo2.png';
import EncryptButton from '../../../animations/EncryptButton';
import { Link } from 'react-scroll';
import './style.css';
import './styleMobile.css';
export function Hero() {
    function openWhatsapp() {
        const phone = '5554991806517';
        const text = 'Olá Bruno! Gostaria de mais informações sobre os serviço de criação de sites';
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (_jsxs("section", { className: 'section-hero', children: [_jsxs("div", { className: 'container-hero-infos', children: [_jsx("h1", { children: "Bruno Santos" }), _jsx("h3", { children: "WEBSITES DEVELOPER" }), _jsx("span", { children: "Transformando suas ideias de neg\u00F3cio, elevando sua presen\u00E7a digital." }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit dolor tenetur odio. Voluptatibus, quis. Doloremque, repellat, veritatis molestias nobis nostrum, dolore aliquam distinctio hic fugiat porro beatae? Non, et." }), _jsxs("div", { className: 'container-hero-btn', children: [_jsx(EncryptButton, { label: "Entre em contatro", className: 'btn-hero', onClick: openWhatsapp }), _jsx(Link, { to: "solutions", smooth: true, duration: 500, offset: -60, activeClass: "ativo", children: _jsx(EncryptButton, { label: "Projetos", className: 'btn-hero' }) })] })] }), _jsxs("div", { className: 'container-hero-image', children: [_jsx("div", { className: "shape image-front", children: _jsx("img", { src: photo2, alt: "" }) }), _jsx("div", { className: "shape image-back", children: _jsx("img", { src: photo1, alt: "" }) })] })] }));
}
