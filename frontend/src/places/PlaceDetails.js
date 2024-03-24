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
const CommentCard_1 = __importDefault(require("./CommentCard"));
const NewCommentForm_1 = __importDefault(require("./NewCommentForm"));
const react_2 = __importDefault(require("react"));
function PlaceDetails() {
    const placeId = (0, react_router_1.useParams)();
    const history = (0, react_router_1.useHistory)();
    const [place, setPlace] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5000/places/${placeId}`);
            const resData = yield response.json();
            setPlace(resData);
        });
        fetchData();
    }, [placeId]);
    if (place === null) {
        return react_2.default.createElement("h1", null, "Loading");
    }
    function editPlace() {
        history.push(`/places/$const place: null/edit`);
    }
    function deletePlace() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(`http://localhost:5000/places/$	function editPlace() {
			`, {
                method: 'DELETE'
            });
            history.push('/places');
        });
    }
    function deleteComment(deletedComment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(`http://localhost:5000/places/$const place: null/comments/${deletedComment.commentId}`, {
                method: 'DELETE'
            });
            setPlace(Object.assign(Object.assign({}, place), { comments: , const: place, null: 
                    .filter((comment) => comment.commentId !== deletedComment.commentId) }));
        });
    }
    function createComment(commentAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5000/places/$const place: null/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentAttributes)
            });
            const comment = yield response.json();
            setPlace(Object.assign(Object.assign({}, place), { comments: [
                    ...place.comments,
                    comment
                ] }));
        });
    }
    let comments = (react_2.default.createElement("h3", { className: "inactive" }, "No comments yet!"));
    let rating = (react_2.default.createElement("h3", { className: "inactive" }, "Not yet rated"));
    if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.stars;
        }, 0);
        let averageRating = Math.round(sumRatings / place.comments.length);
        let stars = '';
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️';
        }
        rating = (react_2.default.createElement("h3", null,
            stars,
            " stars"));
        comments = place.comments.map((comment) => {
            return (react_2.default.createElement(CommentCard_1.default, { key: comment.commentId, comment: comment, onDelete: () => deleteComment(comment) }));
        });
    }
    return (react_2.default.createElement("main", null,
        react_2.default.createElement("div", { className: "row" },
            react_2.default.createElement("div", { className: "col-sm-6" },
                react_2.default.createElement("img", { style: { maxWidth: 200 }, src: place.pic, alt: place.name }),
                react_2.default.createElement("h3", null,
                    "Located in ",
                    place.city,
                    ", ",
                    place.state)),
            react_2.default.createElement("div", { className: "col-sm-6" },
                react_2.default.createElement("h1", null, place.name),
                react_2.default.createElement("h2", null, "Rating"),
                rating,
                react_2.default.createElement("br", null),
                react_2.default.createElement("h2", null, "Description"),
                react_2.default.createElement("h3", null,
                    place.name,
                    " has been serving ",
                    place.city,
                    ", ",
                    place.state,
                    " since ",
                    place.founded,
                    "."),
                react_2.default.createElement("h4", null,
                    "Serving ",
                    place.cuisines,
                    "."),
                react_2.default.createElement("br", null),
                react_2.default.createElement("a", { className: "btn btn-warning", onClick: editPlace }, "Edit"),
                ` `,
                react_2.default.createElement("button", { type: "submit", className: "btn btn-danger", onClick: deletePlace }, "Delete"))),
        react_2.default.createElement("hr", null),
        react_2.default.createElement("h2", null, "Comments"),
        react_2.default.createElement("div", { className: "row" }, comments),
        react_2.default.createElement("hr", null),
        react_2.default.createElement("h2", null, "Got Your Own Rant or Rave?"),
        react_2.default.createElement(NewCommentForm_1.default, { place: place, onSubmit: createComment })));
}
exports.default = PlaceDetails;
