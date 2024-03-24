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
function PlaceIndex(data) {
    const history = (0, react_router_1.useHistory)();
    const [places, setPlaces] = (0, react_2.useState)([]);
    (0, react_2.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5000/places`);
            const resData = yield response.json();
            setPlaces(resData);
        });
        fetchData();
    }, []);
    let placesFormatted = places.map((place) => {
        return (react_1.default.createElement("div", { className: "col-sm-6", key: place.placeId },
            react_1.default.createElement("h2", null,
                react_1.default.createElement("a", { href: "#", onClick: () => history.push(`/places/${place.placeId}`) }, "place.name:any")),
            react_1.default.createElement("p", { className: "text-center" }, "place.cuisines:any"),
            react_1.default.createElement("img", { style: { maxWidth: 200 }, src: place.pic, alt: place.name }),
            react_1.default.createElement("p", { className: "text-center" }, "Located in place.city:any, place.state:any")));
    });
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "Places to Rant or Rave About"),
        react_1.default.createElement("div", { className: "row" }, placesFormatted)));
}
exports.default = PlaceIndex;
