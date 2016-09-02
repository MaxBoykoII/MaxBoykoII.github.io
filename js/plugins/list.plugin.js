"use strict";
var _ = require('lodash');
exports.listify = function ($) {
    $.fn.listify = function (arr) {
        var chunked = _.chunk(arr, 5);
        for (var _i = 0, chunked_1 = chunked; _i < chunked_1.length; _i++) {
            var chunk = chunked_1[_i];
            var list = jQuery('<ul></ul>');
            for (var _a = 0, chunk_1 = chunk; _a < chunk_1.length; _a++) {
                var element = chunk_1[_a];
                list.append(jQuery("<li>" + element + "</li>"));
            }
            this.append(list);
        }
        return this;
    };
};
//# sourceMappingURL=list.plugin.js.map