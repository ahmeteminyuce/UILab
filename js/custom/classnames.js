/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    targetList: 'classnames-list',
    targetAlerts: 'classnames-alerts',

    // main classnames
    nameTotal: 'classnames-total',

    // styling classnames
    stylesNoErrors: 'ui-opacity-half',
    stylesWarningSep: 'ui-font-18 ui-font-capitalize ui-m-20-t',

    stylesError: 'ui-color-red',
    stylesWarning: 'ui-color-yellow',

    stylesCatTite: 'ui-h4 ui-font-capitalize ui-m-10-b',
    stylesCatCard: 'ui-card ui-font-16 ui-round ui-p-10 ui-shadow-lg',
    stylesCatList: 'ui-list-unstyled ui-list-sp-5 ui-m-10 ui-sm-no-m',
    stylesCatCols: 'ui-list-col-3',

    // values
    filePath: 'xhr/ajax-pages.php',
    prefix: 'ui',

    // messages
    msgErrors: 'Errors',
    msgNoErrors: '* No errors detected *',

    msgEmpty: 'Empty Classname!',
    msgDuplicate: 'Prefix Duplicated'

};

(function () {

    'use strict';
    /*globals document, ui, Intl */

    ui.classnames.Start = function () {

        var arr, total, created, list, alerts, lastAddedWarning;

        // create arrays
        arr = [];

        arr.list = [];
        arr.error = [];
        arr.warning = [];

        arr.filtered = [];
        arr.groups = [];

        lastAddedWarning = '';

        // get elements
        total = ui.find('.' + ui.classnames.nameTotal)[0];

        list = ui.find('.' + ui.classnames.targetList)[0];
        alerts = ui.find('.' + ui.classnames.targetAlerts)[0];

        // check all pages with xhr
        ui.ajax({
            url : ui.classnames.filePath,
            callback: function () { }
        });

        // get real classnames list with xhr triggered callback event
        ui.on(document,
            ui.globals.eventAjaxCallback,

            function () {

                var i, reStart, reDuplicate, str, strStart, strLength, html, title, items, collator;

                // check all class names
                ui.each(ui.ajax.classNames,

                    function () {

                        // check prefix
                        reStart = ui.classnames.prefix + '-';
                        reStart = new RegExp(reStart, 'g');

                        // check duplicates
                        reDuplicate = '(' + ui.classnames.prefix + '-)|(-' + ui.classnames.prefix + ')';
                        reDuplicate = new RegExp(reDuplicate, 'g');

                        str = this.toString();
                        strStart = str.match(reStart);

                        if (strStart === null) {

                            if (str === '') {

                                // error: empty
                                arr.error.push(ui.classnames.msgEmpty);

                            } else {

                                // warning
                                arr.warning.push(str);

                            }

                        } else {

                            // list
                            arr.list.push(str);

                        }

                        strLength = str.match(reDuplicate);
                        if (strLength !== null) {

                            strLength = Number(str.match(reDuplicate).length);
                            if (strLength > 1) {

                                // error: duplicate
                                arr.error.push(ui.classnames.msgDuplicate + ': ' + str);

                            }

                        }

                    });

                // create errors
                if (arr.error.length === 0) {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesNoErrors + '">' + ui.classnames.msgNoErrors + '</li>');

                } else {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + ui.classnames.msgErrors + '</li>');
                }

                ui.each(arr.error,

                    function () {
                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesError + '">' + this + '</li>');
                    });

                // create warnings
                arr.warning = arr.warning.sort();
                ui.each(arr.warning,

                    function () {

                        if (lastAddedWarning === '' || lastAddedWarning.split('-')[0] !== this.split('-')[0]) {
                            alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + this.split('-')[0] + '</li>');
                        }

                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarning + '">' + this + '</li>');
                        lastAddedWarning = this;

                    });

                // filter list of classnames
                function filterClassnames(that) {

                    title = that.split('-')[1];

                    // Ex: ui-no-*, ui-sm-*
                    if (title === 'no' || title === 'xl' || title === 'lg' || title === 'md' || title === 'sm' || title === 'xs') {
                        title = that.split('-')[2];
                    }

                    // Ex: ui-sm-no-*
                    if (title === 'no') {
                        title = that.split('-')[3];
                    }

                    // rules
                    if (title === 'container' || title === 'fixed' || title === 'row' || title === 'gutter' || title === 'col') {
                        title = 'grid system';
                    }

                    if (title === 'h1' || title === 'h2' || title === 'h3' || title === 'h4' || title === 'h5' || title === 'h6') {
                        title = 'headings';
                    }

                    if (title === 'm') { title = 'margins'; }
                    if (title === 'p') { title = 'paddings'; }

                    if (title === 'sp') { title = 'spacers'; }

                    return title;

                }

                // create group names
                ui.each(arr.list,

                    function () {

                        filterClassnames(this); // returns title

                        if (arr.filtered.indexOf(title) === -1) {
                            arr.filtered.push(title);
                        }

                    });

                // copy classnames to filtered groups
                ui.each(arr.list,

                    function () {

                        filterClassnames(this); // returns title

                        if (arr.filtered.indexOf(title) > -1) {

                            if (arr.groups[title] === undefined) {
                                arr.groups[title] = this;

                            } else {
                                arr.groups[title] += ', ' + this;
                            }

                        }

                    });

                // create categories
                created = 0;

                if (!ui.userAgents.ie) {
                    collator = new Intl.Collator('en', {numeric: true, sensitivity: 'base'});
                }

                arr.filtered = arr.filtered.sort();
                ui.each(arr.filtered,

                    function () {

                        html = '<h4 class="' + ui.classnames.stylesCatTite + '">' + this + '</h4>' +

                                '<div class="' + ui.classnames.stylesCatCard + '">' +
                                    '<ul class="' + ui.classnames.stylesCatList;

                        items = arr.groups[this].split(',');

                        if (ui.userAgents.ie) {
                            items = items.sort(); // default sorting for IE

                        } else {
                            items = items.sort(collator.compare); // sort with collactor for modern browsers
                        }

                        if (items.length > 5) {
                            html += ' ' + ui.classnames.stylesCatCols;
                        }

                        html += '">';

                        for (i = 0; i < items.length; i++) {

                            items[i] = items[i].replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                            html += '<li>' + items[i] + '</li>';
                            created += 1;

                        }

                        html += '</ul></div>';

                        list.insertAdjacentHTML('beforeend', html);

                    });

                total.textContent = arr.filtered.length + ' / ' + created;

                // empty variables
                arr = [];

                html = "";
                items = "";

            });

    };

    // Loaders
    ui.onload(ui.classnames.Start);

}());
