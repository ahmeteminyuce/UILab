/*
 UI Top Button JS
 Requires UI JS
*/

ui.topButton = {

    // targets
    target: 'top-button',
    targetScrollable: 'body', // don't use html tag: IE 10 not supported!

    // helper classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',

    // styling classnames
    stylesTarget: 'circle ease-layout',
    stylesIcon: 'icon ease-layout',

    // icons
    icon: 'arrow-to-top',

    // custom texts
    titleText : 'Back to top!'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout ,setInterval, clearInterval */

    var
        scrollPos,
        scrollEl,
        btnAnimate;

    function togglerFnc() {

        var topBtn, showBtn, hideBtn;
        topBtn = ui.find('.' + ui.topButton.target);

        showBtn = function () {

            if (!ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                ui.addClass(topBtn, ui.topButton.nameOpen);

                setTimeout(function () {
                    ui.addClass(topBtn, ui.topButton.nameOpenEase);
                }, ui.globals.slow);

            }

        };

        hideBtn = function () {

            if (ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                ui.removeClass(topBtn, ui.topButton.nameOpenEase);

                setTimeout(function () {
                    ui.removeClass(topBtn, ui.topButton.nameOpen);
                }, ui.globals.slow);

            }

        };

        if (ui.topButton.targetScrollable === 'body') {

            if (scrollEl === undefined) { return; }

            if (scrollEl.offsetHeight > (window.innerHeight * 2) && window.innerWidth > ui.globals.sm) {

                scrollPos = window.pageYOffset;

                if (scrollPos > (window.innerHeight / 3)) {
                    showBtn();

                } else {
                    hideBtn();
                }

            }

        } else {

            scrollPos = scrollEl.scrollTop;

            if (scrollPos > (scrollEl.offsetHeight / 3) && window.innerWidth > ui.globals.sm) {
                showBtn();

            } else {
                hideBtn();
            }
        }

    }

    ui.topButton.Start = function () {

        if (ui.userAgents.desktop) {

            var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + '" title="' + ui.topButton.titleText + '">' +
                            '<svg class="' + ui.topButton.stylesIcon + '"><use href="#' + ui.topButton.icon + '"/></svg>' +
                        '</button>';

            if (ui.topButton.targetScrollable === 'body') {
                scrollEl = ui.find(ui.topButton.targetScrollable)[0];

            } else {
                scrollEl = ui.find('.' + ui.topButton.targetScrollable)[0];
            }

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            togglerFnc();

            // Event Listeners
            ui.on('.' + ui.topButton.target,
                'click',

                function () {

                    clearInterval(btnAnimate);
                    btnAnimate = setInterval(function () {

                        scrollPos -= (scrollPos / 4);

                        if (ui.topButton.targetScrollable === 'body') {
                            window.scrollTo(0, scrollPos);

                        } else {
                            scrollEl.scrollTop = scrollPos; // IE, EDGE: scrollTo() not supported for div element
                        }

                        if (scrollPos <= 0) { clearInterval(btnAnimate); }

                    }, 10);

                });

        }

    };

    // Loaders
    ui.onload(ui.topButton.Start);

    ui.on(window, 'resize scroll', togglerFnc);
    ui.on(document, ui.globals.eventDomChange, togglerFnc);

}());
