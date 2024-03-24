"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const react_1 = require("react");
exports.CurrentUser = (0, react_1.createContext)();
function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = (0, react_1.useState)(null);
    window.setCurrentUser = setCurrentUser;
    return (React.createElement(exports.CurrentUser.Provider, { value: { currentUser, setCurrentUser } }, children));
}
exports.default = CurrentUserProvider;
