"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CommentCard(comment, onDelete) {
    return (react_1.default.createElement("div", { className: "border col-sm-4" },
        react_1.default.createElement("h2", { className: "rant" }, comment.rant ? 'Rant! 😡' : 'Rave! 😻'),
        react_1.default.createElement("h4", null, comment.content),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("strong", null,
                "- ",
                comment.author.firstName,
                " ",
                comment.author.lastName)),
        react_1.default.createElement("h4", null,
            "Rating: ",
            comment.stars),
        react_1.default.createElement("button", { className: "btn btn-danger", onClick: onDelete }, "Delete Comment")));
}
exports.default = CommentCard;
