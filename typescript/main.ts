import * as jQuery from 'jquery';
import { paragraphs } from './about';

jQuery(document).ready(() => {
    for(let paragraph of paragraphs) {
        jQuery('#about-text').append(jQuery(`<p>${paragraph}</p>`));
    }
    
});