"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Show National Contiguity with a Force Directed Graph";
var svgURL = "./images/svg/national-contiguity.svg";
var userStories = [
    "I can see a Force-directed Graph that shows which countries share borders.",
    "I can see each country's flag on its node.",
    "I can mouse over a flag to get the name of the corresponding country.",
];
var liveDemo = "http://codepen.io/MaxBoyko/full/WojRox/";
var repo = "http://codepen.io/MaxBoyko/pen/WojRox/";
var caption = "A force layout built with d3";
exports.nationalContiguity = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=national-contiguity.js.map