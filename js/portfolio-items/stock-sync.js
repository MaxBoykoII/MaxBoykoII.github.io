"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Chart the Stock Market ";
var svgURL = "./images/svg/stock-sync.svg";
var userStories = [
    'I can view a graph displaying the recent trend lines for each added stock.',
    'I can add new stocks by their symbol name.',
    'I can remove stocks.',
    'I can see changes in real-time when any other user adds or removes a stock.'
];
var liveDemo = "https://stock-sync.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/stock-sync";
var caption = "An app to chart the stock market and sync across multiple clients";
exports.stockSync = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=stock-sync.js.map