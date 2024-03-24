"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./Home"));
const PlaceIndex_1 = __importDefault(require("./places/PlaceIndex"));
const PlaceDetails_1 = __importDefault(require("./places/PlaceDetails"));
const Navigation_1 = __importDefault(require("./Navigation"));
const Error404_1 = __importDefault(require("./Error404"));
const NewPlaceForm_1 = __importDefault(require("./places/NewPlaceForm"));
const EditPlaceForm_1 = __importDefault(require("./places/EditPlaceForm"));
const SignUpForm_1 = __importDefault(require("./users/SignUpForm"));
const LoginForm_1 = __importDefault(require("./users/LoginForm"));
const CurrentUser_1 = __importDefault(require("./contexts/CurrentUser"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(CurrentUser_1.default, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Navigation_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/sign-up", component: SignUpForm_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LoginForm_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/places", component: PlaceIndex_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/places/new", component: NewPlaceForm_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/places/:placeId", component: PlaceDetails_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/places/:placeId/edit", component: EditPlaceForm_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", component: Error404_1.default })))));
}
exports.default = App;
