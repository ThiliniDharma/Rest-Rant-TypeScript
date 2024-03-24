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
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_router_1 = require("react-router");
function SignUpForm() {
    const history = (0, react_router_1.useHistory)();
    const [user, setUser] = (0, react_2.useState)({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            yield fetch(`http://localhost:5000/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            history.push(`/`);
        });
    }
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "Sign Up"),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_1.default.createElement("label", { htmlFor: "firstName" }, "First Name"),
                    react_1.default.createElement("input", { required: true, value: user.firstName, onChange: e => setUser(Object.assign(Object.assign({}, user), { firstName: e.target.value })), className: "form-control", id: "firstName", name: "firstName" })),
                react_1.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_1.default.createElement("label", { htmlFor: "lastName" }, "Last Name"),
                    react_1.default.createElement("input", { required: true, value: user.lastName, onChange: e => setUser(Object.assign(Object.assign({}, user), { lastName: e.target.value })), className: "form-control", id: "lastName", name: "lastName" }))),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
                    react_1.default.createElement("input", { type: "email", required: true, value: user.email, onChange: e => setUser(Object.assign(Object.assign({}, user), { email: e.target.value })), className: "form-control", id: "email", name: "email" })),
                react_1.default.createElement("div", { className: "col-sm-6 form-group" },
                    react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                    react_1.default.createElement("input", { type: "password", required: true, value: user.password, onChange: e => setUser(Object.assign(Object.assign({}, user), { password: e.target.value })), className: "form-control", id: "password", name: "password" }))),
            react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Sign Up" }))));
}
exports.default = SignUpForm;
