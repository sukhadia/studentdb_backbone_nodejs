define(['jquery', 'backbone'], function($, Backbone) {
    return Backbone.View.extend({

        className: 'pagination pagination-centered',

        initialize:function (options) {
            this.options = options;
            this.model.bind('reset', this.render, this);
            this.render();
        },

        render:function () {

            var items = this.model.models;
            var len = items.length;
            var pageCount = Math.ceil(len / 2);

            $(this.el).html('<ul />');

            for (var i=0; i < pageCount; i++) {
                $('ul', this.el).append('<li' + ((i + 1) === this.options.page ? ' class="active"' : '') + '><a href="#students/page/'+(i+1)+((this.options.mobile)?'?mobile=true':'')+'">' + (i+1) + '</a></li>');
            }

            return this;
        }
    });
});