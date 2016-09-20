"use strict";
var portfolio_item_1 = require('../classes/portfolio-item');
var title = "File Metadata Microservice";
var svgURL = "./images/svg/file-meta.svg";
var userStories = [
    'I can submit a FormData object that includes a file upload.',
    'When I submit something, I will receive the file size in bytes within the response.'
];
var liveDemo = "https://file-size.herokuapp.com/";
var repo = "https://github.com/MaxBoykoII/file-metadata-microservice";
var caption = "A node app that displays the size of an uploaded file.";
exports.fileMeta = new portfolio_item_1.PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);
//# sourceMappingURL=file-meta.js.map