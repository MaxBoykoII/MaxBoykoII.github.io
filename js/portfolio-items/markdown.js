"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Build a Markdown Previewer";
var svgURL = "./images/svg/markdown.svg";
var userStories = [
    "I can type GitHub-flavored Markdown into a text area.",
    "I can see a preview of the output of my markdown that is updated as I type."
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/BzBMgm/';
var repo = 'http://codepen.io/MaxBoyko/pen/BzBMgm';
var caption = 'A simple markdown previewer built with React';
exports.markdown = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=markdown.js.map