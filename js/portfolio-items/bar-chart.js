"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Visualize Data with a Bar Chart ";
var svgURL = "./images/svg/bar-chart.svg";
var userStories = [
    'I can see US Gross Domestic Product by quarter, over time.',
    'I can mouse over a bar and see a tooltip with the GDP amount and exact year and month that bar represents.',
    'The chart is responsive.'
];
var liveDemo = "http://codepen.io/MaxBoyko/full/WGpBVL/";
var repo = "http://codepen.io/MaxBoyko/pen/WGpBVL";
var caption = "A responsive bar chart built with d3";
exports.barChart = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=bar-chart.js.map