"use strict";
var jQuery = require('jquery');
var about_1 = require('./about');
var resume_1 = require('./resume');
var list_plugin_1 = require('./plugins/list.plugin');
list_plugin_1.listify(jQuery);
jQuery(document).ready(function () {
    for (var _i = 0, paragraphs_1 = about_1.paragraphs; _i < paragraphs_1.length; _i++) {
        var paragraph = paragraphs_1[_i];
        jQuery('#about-text').append(jQuery("<p>" + paragraph + "</p>"));
    }
    jQuery('#front-end').listify(resume_1.frontEndSkills);
    jQuery('#back-end').listify(resume_1.backEndSkills);
    jQuery('#miscellaneous').listify(resume_1.miscellaneousSkills);
    jQuery('#currently-learning').listify(resume_1.currentlyLearning);
    jQuery('#goldminerpulse').listify(resume_1.experienceGoldMinerPulse);
    jQuery('#freecodecamp').listify(resume_1.experienceFreeCodeCamp);
    jQuery('#ubc').append(jQuery('<h4>Bsc in Mathematics, conferred 05/2015</h4>'))
        .listify(resume_1.educationUBC);
    jQuery('#freecodecamp-edu').append(jQuery('<h4> https://www.freecodecamp.com</h4>'))
        .listify(resume_1.educationFreeCodeCamp);
    jQuery('#codeschool').append(jQuery('<h4>https://www.codeschool.com/</h4>'))
        .listify(resume_1.educationCodeSchool);
    jQuery('#pluralsight').append(jQuery('<h4>https://www.pluralsight.com</h4>'))
        .listify(resume_1.educationPluralSightAssements, 'list-inline');
});
//# sourceMappingURL=main.js.map