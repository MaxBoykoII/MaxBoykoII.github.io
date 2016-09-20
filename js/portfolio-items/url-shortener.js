"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "URL Shortener Microservice";
var svgURL = "./images/svg/url-shortener.svg";
var userStories = [
    'I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.',
    "If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.",
    'I can get a list of the most recently submitted search strings.'
];
var liveDemo = "https://url-shortener-2.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/url-shortener";
var caption = "A node app for shortening urls.";
exports.urlShortener = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=url-shortener.js.map