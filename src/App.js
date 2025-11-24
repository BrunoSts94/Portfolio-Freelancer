import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ParticlesComponent } from './animations/Particles';
import { Element } from 'react-scroll';
//Components
import { Header } from './components/Header';
import { Hero } from './components/Sections/Hero';
import { Services } from './components/Sections/Services';
import { Solutions } from './components/Sections/Solutions';
import { Clients } from './components/Sections/Clients';
import { BaseBoard } from './components/Sections/BaseBoard';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ParticlesComponent, {}), _jsx(Header, {}), _jsx(Hero, {}), _jsx(Element, { name: 'services', children: _jsx(Services, {}) }), _jsx(Element, { name: 'solutions', children: _jsx(Solutions, {}) }), _jsx(Element, { name: 'clients', children: _jsx(Clients, {}) }), _jsx(Element, { name: 'contact', children: _jsx(BaseBoard, {}) })] }));
}
export default App;
