"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Build a Voting App ";
var svgURL = "./images/svg/max-polls.svg";
var userStories = [
    'As an authenticated user, I can keep my polls and come back later to access them.',
    'As an authenticated user, I can share my polls with my friends.',
    'As an authenticated user, I can see the aggregate results of my polls.',
    "As an authenticated user, I can delete polls that I decide I don't want anymore.",
    "As an authenticated user, I can create a poll with any number of possible items.",
    "As an unauthenticated or authenticated user, I can see and vote on everyone's polls.",
    "As an unauthenticated or authenticated user, I can see the results of polls in chart form.",
    "As an authenticated user, if I don't like the options on a poll, I can create a new option."
];
var liveDemo = "https://max-polls.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/max-polls";
var caption = "A polling app with a node backend and angular frontend.";
exports.maxPolls = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=max-polls.js.map