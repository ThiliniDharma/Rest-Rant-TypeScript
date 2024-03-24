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
function NewCommentForm(place, onSubmit) {
    const [authors, setAuthors] = (0, react_2.useState)([]);
    const [comment, setComment] = (0, react_2.useState)({
        content: '',
        stars: 3,
        rant: false,
        authorId: ''
    });
    (0, react_2.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield fetch(`http://localhost:5000/users`);
            const users = yield response.json();
            setComment(Object.assign(Object.assign({}, comment), { authorId: (_a = users[0]) === null || _a === void 0 ? void 0 : _a.userId }));
            setAuthors(users);
        });
        fetchData();
    }, []);
    let authorOptions = authors.map(author => {
        return react_1.default.createElement("option", { key: author.userId, value: author.userId },
            author.firstName,
            " ",
            author.lastName);
    });
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(comment);
        setComment({
            content: '',
            stars: 3,
            rant: false,
            authorId: authors[0] ? react_1.default.createElement("div", { className: "userId:any" })
                :
        });
    }
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "form-group col-sm-12" },
                react_1.default.createElement("label", { htmlFor: "content" }, "Content"),
                react_1.default.createElement("textarea", { required: true, value: comment.content, onChange: e => setComment(Object.assign(Object.assign({}, comment), { content: e.target.value })), className: "form-control", id: "content", name: "content" }))),
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "form-group col-sm-4" },
                react_1.default.createElement("label", { htmlFor: "state" }, "Author"),
                react_1.default.createElement("select", { className: "form-control", value: comment.authorId, onChange: e => setComment(Object.assign(Object.assign({}, comment), { authorId: e.target.value })) }, authorOptions)),
            react_1.default.createElement("div", { className: "form-group col-sm-4" },
                react_1.default.createElement("label", { htmlFor: "stars" }, "Star Rating"),
                react_1.default.createElement("input", { value: comment.stars, onChange: e => setComment(Object.assign(Object.assign({}, comment), { stars: e.target.value })), type: "range", step: "0.5", min: "1", max: "5", id: "stars", name: "stars", className: "form-control" })),
            react_1.default.createElement("div", { className: "form-group col-sm-4" },
                react_1.default.createElement("label", { htmlFor: "rand" }, "Rant"),
                react_1.default.createElement("input", { checked: place.rant, onClick: e => setComment(...comment, rant) }),
                ": e.target.checked;any)} type=\"checkbox\" id=\"rant\" name=\"rant\" className=\"form-control\" />")),
        react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Add Comment" })));
}
exports.default = NewCommentForm;
