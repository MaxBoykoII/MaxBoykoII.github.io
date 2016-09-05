import * as jQuery from 'jquery';
import { paragraphs } from './about';
import { frontEndSkills, backEndSkills, miscellaneousSkills, currentlyLearning } from './resume';

import { listify } from './plugins/list.plugin';

/* Set up plugins */
listify(jQuery)

jQuery(document).ready(() => {
    /* Add Bootstrap scrollspy */
    $('body').scrollspy({
        target:'.navbar',
        offset: 160
    });
    
    /* Add about text */
    for (let paragraph of paragraphs) {
        jQuery('#about-text').append(jQuery(`<p>${paragraph}</p>`));
    }

    /* Add front-end skills, back-end skills, miscellaneous skills */
    jQuery('#front-end').listify(frontEndSkills);
    jQuery('#back-end').listify(backEndSkills);
    jQuery('#miscellaneous').listify(miscellaneousSkills);
    jQuery('#currently-learning').listify(currentlyLearning);


});