"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Build a Nightlife Coordination App";
var svgURL = "./images/svg/nightlife.svg";
var userStories = [
    "As an unauthenticated user, I can view all bars in my area.",
    "As an authenticated user, I can add myself to a bar to indicate I am going there tonight.",
    "As an authenticated user, I can remove myself from a bar if I no longer want to go there.",
    "As an unauthenticated user, when I login I should not have to search again."
];
var liveDemo = "https://joyous-nightlife.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/nightlife";
var caption = "A nightlife coordination app built with angular 2 and node";
exports.nightlife = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=nightlife.js.map