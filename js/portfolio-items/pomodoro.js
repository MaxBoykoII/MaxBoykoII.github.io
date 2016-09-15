"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Zipline: Build a Pomodoro Clock";
var svgURL = "./images/svg/pomodoro.svg";
var userStories = [
    "I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.",
    "I can reset the clock for my next pomodoro.",
    "I can customize the length of each pomodoro."
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/PPNOYy/';
var repo = 'http://codepen.io/MaxBoyko/pen/PPNOYy';
var caption = 'A JavaScript pomodoro clock.';
exports.pomodoro = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=pomodoro.js.map