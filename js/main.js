"use strict";
var jQuery = require('jquery');
var about_1 = require('./about');
jQuery(document).ready(function () {
    console.log(about_1.paragraphs);
    jQuery('#dummy-text').remove();
    for (var _i = 0, paragraphs_1 = about_1.paragraphs; _i < paragraphs_1.length; _i++) {
        var paragraph = paragraphs_1[_i];
        jQuery('#about-text').append(jQuery("<p>" + paragraph + "</p>"));
    }
});
//# sourceMappingURL=main.js.map