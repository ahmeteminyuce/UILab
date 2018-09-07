/*
 Swatches JS
 Swatches JS requires Events JS
*/

/*globals window, document, events, navigator */
function swatchesFnc() {

    'use strict';

    var mobile;

    if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
        mobile = true;
    }

    if (!mobile) {

        events.on(document,

            'mouseenter',
            'a[class*="ui-"]:not(.ui-text):not(.ui-border):not(.opacity):not(.opacity-more):not(.no-hover),.btn[class*="ui-"]:not(.ui-text):not(.ui-border):not(.opacity):not(.opacity-more):not(.no-hover),.hover',

            function () {

                var disabled, r, g, b, a, getStyle, style, currentColor, hoverColor, getAlpha;

                disabled = this.getAttribute('data-swatch'); // if data-swatch="false" stop running!

                if (disabled !== null) {
                    if (disabled === 'false') { return; }
                }

                currentColor = window.getComputedStyle(this);
                currentColor = currentColor.getPropertyValue('background-color');

                hoverColor = (currentColor.slice(currentColor.indexOf('(') + 1, currentColor.indexOf(')')).split(','));

                events.addClass(this, 'swatch-active');
                getStyle = this.getAttribute('style');

                style = '';

                if (getStyle !== null && getStyle !== '') {

                    style = getStyle.toString();
                    this.setAttribute('data-style', style);
                    style += ' ';

                } else { style = ''; }

                r = parseInt(hoverColor[0], 10);
                r += ((255 - r) * 20) / 100;
                if (r > 255) { r = 255; } else if (r < 0) { r = 0; }

                g = parseInt(hoverColor[1], 10);
                g += ((255 - g) * 20) / 100;
                if (g > 255) { g = 255; } else if (g < 0) { g = 0; }

                b = parseInt(hoverColor[2], 10);
                b += ((255 - b) * 20) / 100;
                if (b > 255) { b = 255; } else if (b < 0) { b = 0; }

                getAlpha = hoverColor[3];

                if (getAlpha !== undefined) {
                    a = getAlpha;

                } else { a = "1"; }

                this.setAttribute('style', style + 'background-color: rgb(' + r + ',' + g + ',' + b + ',' + a + ') !important;');

            });

        events.on(document, 'mouseleave', '.swatch-active', function () {

            var getDataStyle = this.getAttribute('data-style');

            if (getDataStyle !== null && getDataStyle !== '') {

                this.setAttribute('style', this.getAttribute('data-style').toString());
                this.removeAttribute('data-style');

            } else { this.removeAttribute('style'); }

            events.removeClass(this, 'swatch-active');

        });

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    swatchesFnc();

});
