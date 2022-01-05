/* card */

import { ui } from './../core/globals.js';
export default () => ui;

ui.card = {

    // targets
    targetClose: 'ui-card-close',

    // styling classnames
    stylesClosing: 'ui-card-close-wait ui-ease-layout'

};

ui.card.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.card.targetClose,

        function () {

            var parentEl = this.parentElement;
            ui.addClass(parentEl, ui.card.stylesClosing);

            setTimeout(() => {
                parentEl.parentNode.removeChild(parentEl);
            }, ui.globals.ease * 2);

        });

};

// loaders
ui.onload(ui.card.Start);