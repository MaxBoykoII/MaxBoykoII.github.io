"use strict";
var jQuery = require('jquery');
var about_1 = require('./about');
var resume_1 = require('./resume');
var list_plugin_1 = require('./plugins/list.plugin');
list_plugin_1.listify(jQuery);
jQuery(document).ready(function () {
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });
    for (var _i = 0, paragraphs_1 = about_1.paragraphs; _i < paragraphs_1.length; _i++) {
        var paragraph = paragraphs_1[_i];
        jQuery('#about-text').append(jQuery("<p>" + paragraph + "</p>"));
    }
    jQuery('#front-end').listify(resume_1.frontEndSkills);
    jQuery('#back-end').listify(resume_1.backEndSkills);
    jQuery('#miscellaneous').listify(resume_1.miscellaneousSkills);
    jQuery('#currently-learning').listify(resume_1.currentlyLearning);
});
//# sourceMappingURL=main.js.map