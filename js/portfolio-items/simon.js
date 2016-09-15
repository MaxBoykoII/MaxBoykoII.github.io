"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Zipline: Build a Simon Game";
var svgURL = "./images/svg/simon.svg";
var userStories = [
    'I am presented with a random series of button presses.',
    ' Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.',
    'I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.',
    'If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.',
    'I can see how many steps are in the current series of button presses.',
    'If I want to restart, I can hit a button to do so, and the game will return to a single step.',
    'I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.',
    ' I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.'
];
var liveDemo = 'http://codepen.io/MaxBoyko/full/LpvYVw/';
var repo = 'http://codepen.io/MaxBoyko/pen/LpvYVw';
var caption = 'A JavaScript implementation of the 1980s game Simon <sup>&reg;</sup>';
exports.simon = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=simon.js.map