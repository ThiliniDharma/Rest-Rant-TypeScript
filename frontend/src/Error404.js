"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Error404() {
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "404: PAGE NOT FOUND"),
        react_1.default.createElement("p", null, "Oops, sorry, we can't find this page!"),
        react_1.default.createElement("img", { src: "http://localhost:5000/images/kittykat.jpeg", alt: "cute cat pic" })));
}
exports.default = Error404;
