"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Timestamp Microservice";
var svgURL = "./images/svg/timestamp.svg";
var userStories = [
    'I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)',
    'If it does, it returns both the Unix timestamp and the natural language form of that date.',
    'If it does not contain a date or Unix timestamp, it returns null for those properties.'
];
var liveDemo = "https://headparser-microservice.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/timestampMicroservice";
var caption = "A node app that parses data from request headers.";
exports.timestamp = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=timestamp.js.map