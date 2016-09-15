"use strict";
var jQuery = require('jquery');
var _ = require('lodash');
var PortfolioItem = (function () {
    function PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption) {
        _.assign(this, { title: title, svgURL: svgURL, userStories: userStories, liveDemo: liveDemo, repo: repo, caption: caption });
    }
    PortfolioItem.prototype.createHTML = function (id) {
        var modalId = "#portfolioModal" + id;
        var templateString = "<div class=\"col-sm-4\"> \n                <a href=\"" + modalId + "\" data-toggle=\"modal\">\n                <img src=\"" + this.svgURL + "\" class=\"img-svg\" alt=\"" + this.title + "\"/>\n                </a>\n                </div>";
        return jQuery(templateString);
    };
    PortfolioItem.prototype.createModalHTML = function (id) {
        var modalId = "portfolioModal" + id;
        var templateString = "\n    <div class=\"portfolio-modal modal fade\" id=\"" + modalId + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-content\">\n                <div class=\"modal-close\" data-dismiss=\"modal\">\n                    <div class=\"lr\">\n                        <div class=\"rl\"></div>\n                    </div>\n                </div>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-8 col-lg-offset-2\">\n                            <div class=\"modal-body\">\n                                <h2>" + this.title + "</h2>\n                                <figure class=\"figure\">\n                                    <img src=\"" + this.svgURL + "\" class=\"img-svg\" alt=\"" + this.title + "\" />\n                                    <figcaption class=\"figure-caption\">" + this.caption + "</figcaption>\n                                </figure>\n                                <h3> User Stories</h3>\n                                <ol>\n                                   " + this.userStories.map(function (story) { return ("<li>" + story + "</li>"); }).join(' ') + "\n                                </ol>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong> <a href=\"" + this.liveDemo + "\" target=\"_blank\">Live Demo</a></strong>\n                                    </li>\n                                    <li>\n                                        <strong> <a href=\"" + this.repo + "\" target=\"_blank\">Code</a></strong>\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i>\n                            Close \n                        </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
        return jQuery(templateString);
    };
    return PortfolioItem;
}());
exports.PortfolioItem = PortfolioItem;
//# sourceMappingURL=portfolio-item.js.map