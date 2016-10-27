"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Visualize Data with a Responsive Heat Map";
var svgURL = "./images/svg/heat-map.svg";
var userStories = [
    'I can view a heat map with data represented both on the Y and X axis.',
    'Each cell is colored based its relationship to other data.',
    'I can mouse over a cell in the heat map to get more exact information.',
    'The chart is responsive.'
];
var liveDemo = "http://codepen.io/MaxBoyko/full/zKyjPO/";
var repo = "http://codepen.io/MaxBoyko/pen/zKyjPO";
var caption = "A responsive heat map built with d3";
exports.heatMap = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=heat-map.js.map