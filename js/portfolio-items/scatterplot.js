"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Visualize Data with a Scatterplot Graph";
var svgURL = "./images/svg/scatterplot.svg";
var userStories = [
    "I can see performance time visualized in a scatterplot graph.",
    "I can mouse over a plot to see a tooltip with additional details.",
    "The chart is responsive."
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/yaoPdm/';
var repo = 'http://codepen.io/MaxBoyko/pen/yaoPdm';
var caption = 'A responsive scatterplot built with d3';
exports.scatterplot = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=scatterplot.js.map