import * as _ from 'lodash';

export const listify = function($) {
    $.fn.listify = function(arr: string[]) {
        const chunked = _.chunk(arr, 5);
        
        for (let chunk of chunked) {
            const list = jQuery('<ul></ul>')
            for (let element of chunk) {
                list.append(jQuery(`<li>${element}</li>`));
            }
            this.append(list);
        }
        return this;
    }
}