import { jsx as _jsx } from "react/jsx-runtime";
import './style.css';
export function DefaultButton({ text, className, ...rest }) {
    return (_jsx("button", { className: `default-button  ${className ?? ''}`, ...rest, children: text }));
}
