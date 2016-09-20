"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Request Header Parser Microservice";
var svgURL = "./images/svg/head-parser.svg";
var userStories = [
    'I can get the IP address, language and operating system for my browser.'
];
var liveDemo = "https://headparser-microservice.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/headparser-microservice";
var caption = "A node app that parses request headers.";
exports.headParser = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=head-parser.js.map