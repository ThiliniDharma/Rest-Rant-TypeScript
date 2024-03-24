"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
const CurrentUser_1 = require("../contexts/CurrentUser");
const react_2 = __importDefault(require("react"));
function LoginForm() {
    const history = (0, react_router_1.useHistory)();
    const setCurrentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser);
    const [credentials, setCredentials] = (0, react_1.useState)({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(null);
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5000/authentication/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const data = yield response.json();
            if (response.status === 200) {
                setCurrentUser(data.user);
                history.push(`/`);
            }
            else {
                setErrorMessage(data.message);
            }
        });
    }
    return (react_2.default.createElement("main", null,
        react_2.default.createElement("h1", null, "Login"),
        errorMessage !== null
            ? (react_2.default.createElement("div", { className: "alert alert-danger", role: "alert" }, errorMessage))
            : null,
        react_2.default.createElement("form", { onSubmit: handleSubmit },
            react_2.default.createElement("div", { className: "row" },
                react_2.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_2.default.createElement("label", { htmlFor: "email" }, "Email"),
                    react_2.default.createElement("input", { type: "email", required: true, value: credentials.email, onChange: e => setCredentials(Object.assign(Object.assign({}, credentials), { email: e.target.value })), className: "form-control", id: "email", name: "email" })),
                react_2.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_2.default.createElement("label", { htmlFor: "password" }, "Password"),
                    react_2.default.createElement("input", { type: "password", required: true, value: credentials.password, onChange: e => setCredentials(Object.assign(Object.assign({}, credentials), { password: e.target.value })), className: "form-control", id: "password", name: "password" }))),
            react_2.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Login" }))));
}
exports.default = LoginForm;
