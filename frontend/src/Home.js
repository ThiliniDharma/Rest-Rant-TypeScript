"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Home() {
    return (React.createElement("main", null,
        React.createElement("h1", null, "HOME"),
        React.createElement("div", null,
            React.createElement("img", { height: "300", width: "500", src: "http://localhost:5000/images/chia-fruit-drink.jpg", alt: "Chia Fruit Shake" }),
            React.createElement("div", null,
                "Photo by ",
                React.createElement("a", { href: "AUTHOR_LINK" }, "Brenda Godinez"),
                " on ",
                React.createElement("a", { href: "UNSPLASH_LINK" }, "Unsplash"))),
        React.createElement("a", { href: "/places" },
            React.createElement("button", { className: "btn-primary" }, "Places Page"))));
}
exports.default = Home;
