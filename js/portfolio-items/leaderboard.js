"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Build a Camper Leaderboard";
var svgURL = "./images/svg/leaderboard.svg";
var userStories = [
    "I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.",
    "I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.",
    "I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total."
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/gMpWry/';
var repo = 'http://codepen.io/MaxBoyko/pen/gMpWry';
var caption = 'A React implementation of a leaderboard.';
exports.leaderboard = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=leaderboard.js.map