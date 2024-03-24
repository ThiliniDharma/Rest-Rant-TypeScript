"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const CurrentUser_1 = require("./contexts/CurrentUser");
const react_2 = __importDefault(require("react"));
function Navigation() {
    const history = (0, react_router_1.useHistory)();
    const currentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser);
    let loginActions = (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("li", { style: { float: 'right' } },
            react_2.default.createElement("a", { href: "#", onClick: () => history.push("/sign-up") }, "Sign Up")),
        react_2.default.createElement("li", { style: { float: 'right' } },
            react_2.default.createElement("a", { href: "#", onClick: () => history.push("/login") }, "Login"))));
    if (currentUser) {
        loginActions = (react_2.default.createElement("li", { style: { float: 'right' } },
            "Logged in as ",
            currentUser.firstName,
            " ",
            currentUser.lastName));
    }
    return (react_2.default.createElement("nav", null,
        react_2.default.createElement("ul", null,
            react_2.default.createElement("li", null,
                react_2.default.createElement("a", { href: "#", onClick: () => history.push("/") }, "Home")),
            react_2.default.createElement("li", null,
                react_2.default.createElement("a", { href: "#", onClick: () => history.push("/places") }, "Places")),
            react_2.default.createElement("li", null,
                react_2.default.createElement("a", { href: "#", onClick: () => history.push("/places/new") }, "Add Place")),
            loginActions)));
}
exports.default = Navigation;
