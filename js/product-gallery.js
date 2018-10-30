/*
 Product Gallery JS
 Product Gallery JS requires Events JS
*/

/*globals selector, events, Image */
var productGalleryFnc = function () {

    'use strict';

    events.on('.product-gallery .thumbs .img', 'click', function () {

        var parent, detail, target, thumbs, index, newImg;

        parent = events.closest(this, '.product-gallery');
        detail = selector('.detail', parent[0]);
        target = selector('img', detail);
        thumbs = selector('.thumbs .img', parent[0]);

        index = Array.prototype.slice.call(thumbs).indexOf(this);
        target.setAttribute('data-count', index);

        events.addClass(detail, 'detail-loader');

        newImg = new Image();
        newImg.src = this.getAttribute('data-href');

        newImg.addEventListener('load', function () {

            target.src = newImg.src;
            events.removeClass(detail, 'detail-loader');

        });

        events.removeClass(thumbs, 'selected');
        events.addClass(this, 'selected');

    });

};

/*!loader */
events.onload(function () {

    'use strict';
    productGalleryFnc();

});
