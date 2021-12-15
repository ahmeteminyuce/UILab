// photoslide
import { ui } from './../core.js';
export default () => ui;

ui.photoslide = {

    // targets
    target: 'ui-photoslide',

    // main classnames
    nameNav: 'ui-photoslide-nav',

    namePrev: 'ui-photoslide-prev',
    nameNext: 'ui-photoslide-next',

    // helper classNames
    nameShow: 'ui-show',
    nameSelected: 'ui-selected',

    nameLoaded: 'ui-loaded',

    // outer classnames
    nameBtn: 'ui-btn',

    // tags
    tagNavDot: 'i',

    // values
    rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$', // .webp and .tiff not supported!

    // data attributes
    dataSrc: 'data-ui-src'

};

(() => {

    var
        count,
        dataSrcLists,
        loadedImages;

    ui.photoslide.Init = function () {

        var slider, j, images, dataSrc, nav, navDots, re;

        images = ui.find('.' + ui.photoslide.target + ' img');
        ui.each(images,

            function (i) {

                if (dataSrcLists[i] !== undefined) { return; }
                dataSrc = images[i].getAttribute(ui.photoslide.dataSrc);

                slider = ui.closest(this, '.' + ui.photoslide.target)[0];
                ui.addClass(slider, ui.photoslide.nameLoaded);

                if (dataSrc !== null && dataSrc !== '') {

                    loadedImages[i] = [];
                    dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                } else {

                    dataSrcLists[i] = '';
                    return;

                }

                re = new RegExp(ui.photoslide.rexFiles);
                if (!dataSrcLists[i][0].match(re)) { return; }

                images[i].removeAttribute(ui.photoslide.dataSrc);

                // create nav
                nav = ui.find('.' + ui.photoslide.nameNav, slider)[0];
                if (dataSrcLists[i].length > 1) {

                    ui.addClass(ui.find('.' + ui.photoslide.nameBtn, slider), ui.photoslide.nameShow);
                    ui.addClass(nav, ui.photoslide.nameShow);

                    if (nav.innerHTML === '') {

                        navDots = '';

                        for (j = 0; j < dataSrcLists[i].length; j++) {

                            if (j === 0) {
                                navDots += '<' + ui.photoslide.tagNavDot + ' class="' + ui.photoslide.nameSelected + '"></' + ui.photoslide.tagNavDot + '>';

                            } else {
                                navDots += '<' + ui.photoslide.tagNavDot + '></' + ui.photoslide.tagNavDot + '>';
                            }

                        }

                        nav.insertAdjacentHTML('beforeend', navDots);

                    }

                }

            });

    }

    ui.photoslide.Start = function () {

        // empty arrays when reloading
        count = [];
        dataSrcLists = [];
        loadedImages = [];

        ui.photoslide.Init();

        // Event Listeners
        ui.on(document,

            'click', '.' + ui.photoslide.target + ' .' + ui.photoslide.nameBtn,

            function (e) {

                e.preventDefault();
                var slider, i, img, total, dots;

                slider = ui.closest(this, '.' + ui.photoslide.target)[0];
                if (slider === undefined) { return; }

                img = ui.find('img', slider)[0];

                i = Array.prototype.slice.call(ui.find('.' + ui.photoslide.target)).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (ui.hasClass(this, ui.photoslide.namePrev)) {

                    if (count[i] <= 0) {
                        count[i] = 0; return;
                    }

                    count[i] -= 1;

                } else if (ui.hasClass(this, ui.photoslide.nameNext)) {

                    if (count[i] >= total) {
                        count[i] = total; return;
                    }

                    count[i] += 1;

                }

                dots = ui.find('.' + ui.photoslide.nameNav + ' i', slider);

                ui.removeClass(dots, ui.photoslide.nameSelected);
                ui.addClass(dots[count[i]], ui.photoslide.nameSelected);

                ui.removeClass(slider, ui.photoslide.nameLoaded);

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];

                    loadedImages[i][count[i]].onload = function () {

                        img.src = loadedImages[i][count[i]].src;
                        ui.addClass(slider, ui.photoslide.nameLoaded);

                    };

                    img.onerror = function () {
                        ui.removeClass(slider, ui.photoslide.nameLoaded);
                    };


                } else {

                    img.src = loadedImages[i][count[i]].src;
                    ui.addClass(slider, ui.photoslide.nameLoaded);

                }

            });

    };

    // loaders
    ui.onload(ui.photoslide.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.photoslide.target) > -1) {
                ui.photoslide.Init();
            }

        });

})();
