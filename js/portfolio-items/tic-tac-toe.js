"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Zipline: Build a Tic Tac Toe Game";
var svgURL = "./images/svg/tic-tac-toe.svg";
var userStories = [
    "I can play a game of Tic Tac Toe with the computer.",
    "My game will reset as soon as it's over so I can play again.",
    "I can choose whether I want to play as X or O."
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/qOPVjx/';
var repo = 'http://codepen.io/MaxBoyko/pen/qOPVjx/';
var caption = 'A JavaScript implementation of tic tac toe.';
exports.tickTacToe = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=tic-tac-toe.js.map