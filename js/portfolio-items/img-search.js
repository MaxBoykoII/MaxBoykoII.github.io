"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "Image Search Abstraction Layer";
var svgURL = "./images/svg/img-search.svg";
var userStories = [
    'I can get the image URLs, alt text and page urls for a set of images relating to a given search string.',
    'I can paginate through the responses by adding a ?offset=2 parameter to the URL.',
    'I can get a list of the most recently submitted search strings.'
];
var liveDemo = "https://img-search-abstraction-layer.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/image-search-abstraction-layer";
var caption = "A node app for searching images.";
exports.imgSearch = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=img-search.js.map