"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const root = client_1.default.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
    root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, null)));
}
else {
    root.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(App_1.default, null))));
}
//# sourceMappingURL=index.js.map