import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useLayoutEffect, useRef } from "react";
import './style.css';
const ElectricBorder = ({ children, color = '#5227FF', speed = 1, chaos = 1, thickness = 2, className, style }) => {
    const rawId = useId().replace(/[:]/g, '');
    const filterId = `turbulent-displace-${rawId}`;
    const svgRef = useRef(null);
    const rootRef = useRef(null);
    const strokeRef = useRef(null);
    const updateAnim = () => {
        const svg = svgRef.current;
        const host = rootRef.current;
        if (!svg || !host)
            return;
        if (strokeRef.current) {
            strokeRef.current.style.filter = `url(#${filterId})`;
        }
        const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
        const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));
        const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
        if (dyAnims.length >= 2) {
            dyAnims[0].setAttribute('values', `${height}; 0`);
            dyAnims[1].setAttribute('values', `0; -${height}`);
        }
        const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
        if (dxAnims.length >= 2) {
            dxAnims[0].setAttribute('values', `${width}; 0`);
            dxAnims[1].setAttribute('values', `0; -${width}`);
        }
        const baseDur = 6;
        const dur = Math.max(0.001, baseDur / (speed || 1));
        [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));
        const disp = svg.querySelector('feDisplacementMap');
        if (disp)
            disp.setAttribute('scale', String(30 * (chaos || 1)));
        const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
        if (filterEl) {
            filterEl.setAttribute('x', '-200%');
            filterEl.setAttribute('y', '-200%');
            filterEl.setAttribute('width', '500%');
            filterEl.setAttribute('height', '500%');
        }
        requestAnimationFrame(() => {
            [...dyAnims, ...dxAnims].forEach((a) => {
                if (typeof a.beginElement === 'function') {
                    try {
                        a.beginElement();
                    }
                    catch { }
                }
            });
        });
    };
    useEffect(() => {
        updateAnim();
    }, [speed, chaos]);
    useLayoutEffect(() => {
        if (!rootRef.current)
            return;
        const ro = new ResizeObserver(() => updateAnim());
        ro.observe(rootRef.current);
        updateAnim();
        return () => ro.disconnect();
    }, []);
    const vars = {
        ['--electric-border-color']: color,
        ['--eb-border-width']: `${thickness}px`
    };
    return (_jsxs("div", { ref: rootRef, className: `electric-border ${className ?? ''}`, style: { ...vars, ...style }, children: [_jsx("svg", { ref: svgRef, className: "eb-svg", "aria-hidden": true, focusable: "false", children: _jsx("defs", { children: _jsxs("filter", { id: filterId, colorInterpolationFilters: "sRGB", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [_jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "1" }), _jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise1", children: _jsx("animate", { attributeName: "dy", values: "700; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }), _jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "1" }), _jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise2", children: _jsx("animate", { attributeName: "dy", values: "0; -700", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }), _jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "2" }), _jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise3", children: _jsx("animate", { attributeName: "dx", values: "490; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }), _jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "2" }), _jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise4", children: _jsx("animate", { attributeName: "dx", values: "0; -490", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }), _jsx("feComposite", { in: "offsetNoise1", in2: "offsetNoise2", result: "part1" }), _jsx("feComposite", { in: "offsetNoise3", in2: "offsetNoise4", result: "part2" }), _jsx("feBlend", { in: "part1", in2: "part2", mode: "color-dodge", result: "combinedNoise" }), _jsx("feDisplacementMap", { in: "SourceGraphic", in2: "combinedNoise", scale: "30", xChannelSelector: "R", yChannelSelector: "B" })] }) }) }), _jsxs("div", { className: "eb-layers", children: [_jsx("div", { ref: strokeRef, className: "eb-stroke" }), _jsx("div", { className: "eb-glow-1" }), _jsx("div", { className: "eb-glow-2" }), _jsx("div", { className: "eb-background-glow" })] }), _jsx("div", { className: "eb-content", children: children })] }));
};
export default ElectricBorder;
