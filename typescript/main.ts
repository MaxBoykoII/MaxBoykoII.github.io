import * as jQuery from 'jquery';
import { paragraphs } from './about';
import {
    frontEndSkills,
    backEndSkills,
    miscellaneousSkills,
    currentlyLearning,
    experienceGoldMinerPulse,
    experienceFreeCodeCamp,
    educationUBC,
    educationFreeCodeCamp,
    educationCodeSchool,
    educationPluralSightAssements
}
from './resume';

import { listify } from './plugins/list.plugin';

import { PortfolioItem } from './classes/portfolio-item';
import { portfolioItems } from './portfolio';

/* 
 * Set up plugins 
 */
listify(jQuery);

jQuery(document).ready(() => {

    /* 
     * Add about text 
     */
    for (let paragraph of paragraphs) {
        jQuery('#about-text').append(jQuery(`<p>${paragraph}</p>`));
    }

    /* 
     * Add front-end skills, back-end skills, miscellaneous skills 
     */
     
    jQuery('#front-end').listify(frontEndSkills);
    jQuery('#back-end').listify(backEndSkills);
    jQuery('#miscellaneous').listify(miscellaneousSkills);
    jQuery('#currently-learning').listify(currentlyLearning);

    /* 
     * Add experience at goldminerpulse and freeCodeCamp 
     */
    jQuery('#goldminerpulse').listify(experienceGoldMinerPulse);
    jQuery('#freecodecamp').listify(experienceFreeCodeCamp);

    /* 
     * Add eduction at UBC, freeCodeCamp, Codeschool, and pluralsight 
     */
    jQuery('#ubc').append(jQuery('<h4>Bsc in Mathematics, conferred 05/2015</h4>'))
        .listify(educationUBC);
    jQuery('#freecodecamp-edu').append(jQuery('<h4> https://www.freecodecamp.com</h4>'))
        .listify(educationFreeCodeCamp);
    jQuery('#codeschool').append(jQuery('<h4>https://www.codeschool.com/</h4>'))
        .listify(educationCodeSchool);
    jQuery('#pluralsight').append(jQuery('<h4>https://www.pluralsight.com</h4>'))
        .listify(educationPluralSightAssements, 'list-inline');
   /* 
    *Add portfolio items to portfolio section 
    */
    const portfolioGallery = jQuery('#portfolio-gallery');
    const portfolioModals = jQuery('#portfolio-modals');
    for (let item of portfolioItems) {
        const id = portfolioItems.indexOf(item);
        portfolioGallery.append(item.createHTML(id));
        portfolioModals.append(item.createModalHTML(id));
    }
   
});