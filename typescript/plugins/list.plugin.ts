import * as _ from 'lodash';

export const listify = function($) {
    $.fn.listify = function(arr: string[], className?: string) {
        const chunked = _.chunk(arr, 5);
        const classAttr = className? `class="${className}"`: '';
        for (let chunk of chunked) {
            const list = jQuery(`<ul ${classAttr}></ul>`)
            for (let element of chunk) {
                list.append(jQuery(`<li>${element}</li>`));
            }
            this.append(list);
        }
        return this;
    }
}