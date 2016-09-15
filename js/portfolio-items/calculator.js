"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Zipline: Build a JavaScript calculator";
var svgURL = "./images/svg/calculator.svg";
var userStories = [
    'I can add, subtract, multiply and divide two numbers.',
    'I can clear the input field with a clear button.',
    'I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output'
];
var liveDemo = "http://codepen.io/MaxBoyko/full/WQKjJN";
var repo = "http://codepen.io/MaxBoyko/pen/WQKjJN";
var caption = "A javascript calculator";
exports.calculator = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=calculator.js.map