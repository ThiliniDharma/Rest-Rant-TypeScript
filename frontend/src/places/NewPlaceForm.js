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
function NewPlaceForm() {
    const history = (0, react_router_1.useHistory)();
    const [place, setPlace] = (0, react_2.useState)({
        name: '',
        founded: '',
        pic: '',
        city: '',
        state: '',
        cuisines: ''
    });
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            yield fetch(`http://localhost:5000/places`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(place)
            });
            history.push('/places');
        });
    }
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "Add a New Place"),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "name" }, "Place Name"),
                react_1.default.createElement("input", { required: true, value: place.name, onChange: e => setPlace(Object.assign(Object.assign({}, place), { name: e.target.value })), className: "form-control", id: "name", name: "name" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "founded" }, "Year Founded"),
                react_1.default.createElement("input", { required: true, value: place.founded, onChange: e => setPlace(Object.assign(Object.assign({}, place), { founded: e.target.value })), className: "form-control", id: "founded", name: "founded" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "pic" }, "Place Picture"),
                react_1.default.createElement("input", { value: place.pic, onChange: e => setPlace(Object.assign(Object.assign({}, place), { pic: e.target.value })), className: "form-control", id: "pic", name: "pic" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "city" }, "City"),
                react_1.default.createElement("input", { value: place.city, onChange: e => setPlace(Object.assign(Object.assign({}, place), { city: e.target.value })), className: "form-control", id: "city", name: "city" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "state" }, "State"),
                react_1.default.createElement("input", { value: place.state, onChange: e => setPlace(Object.assign(Object.assign({}, place), { state: e.target.value })), className: "form-control", id: "state", name: "state" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "cuisines" }, "Cuisines"),
                react_1.default.createElement("input", { value: place.cuisines, onChange: e => setPlace(Object.assign(Object.assign({}, place), { cuisines: e.target.value })), className: "form-control", id: "cuisines", name: "cuisines", required: true })),
            react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Add Place" }))));
}
exports.default = NewPlaceForm;
