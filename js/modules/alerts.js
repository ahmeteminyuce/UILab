/* alerts */

import { ui } from './../core/globals.js';
export default () => ui;

ui.alerts = {

    // targets
    targetDialog: 'ui-alerts-dialog',
    targetMsg: 'ui-alerts-msg',
    targetBg: 'ui-alerts-bg',

    // main classnames
    nameDialogOpened: 'ui-alerts-opened',
    nameDialogMsg: 'ui-dialog-msg',
    nameCloseDialog: 'ui-dialog-close',

    nameDialogBtnHolder: 'ui-dialog-buttons',
    nameDialogCustom: 'ui-dialog-custom',
    nameDialogSuccess: 'ui-dialog-success',
    nameDialogError: 'ui-dialog-error',

    nameMsgHolder: 'ui-alerts-msg-holder',
    nameMsgThemePrefix: 'ui-msg-',

    namePosPrefix: 'ui-',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameShow: 'ui-show',
    nameShowEase: 'ui-show-ease',

    // outer classnames
    nameIcon: 'ui-icon',

    // styling classnames
    stylesDialog: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
    stylesCloseDialog: 'ui-ease-layout',
    stylesDialogBtnHolder: 'ui-ease-1st-btn',

    stylesMsg: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
    stylesMsgTheme: '',

    stylesBg: 'ui-ease-layout',

    // icons
    closeIcon: 'remove',

    // values
    dialogMessages: false, // shows automatically clicked buttons text
    successBtnValue: 'success',
    errorBtnValue: 'error',

    messageTimer: 4000, // wait for atomatically close messages

    posDefault: 'br',

    posTopRight: 'tr',
    posTopLeft: 'tl',
    posBottomRight: 'br',
    posBottomLeft: 'bl',

    themeSuccess: 'success',
    themeWarning: 'warning',
    themeDanger: 'danger',

    // messages
    msgDialogSuccess: 'OK',

    // custom events
    eventCloseDialog: 'ui:closeAlertsDialog'

};

(() => {

    let
        pageYPos,
        cancelCloseDialog,

        messageQueue = [];

    ui.alerts.Start = () => {

        // dialogues
        ui.alerts.closeDialog = function () {

            const dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            ui.removeClass(dialog, ui.alerts.nameShowEase);

            setTimeout(() => {

                dialog.parentNode.removeChild(dialog);

                const bg = ui.find('.' + ui.alerts.targetBg);
                ui.removeClass(bg, ui.alerts.nameOpenEase);

                ui.removeClass(document, ui.alerts.nameDialogOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(() => {
                    ui.removeClass(bg, ui.alerts.nameOpen);
                }, ui.globals.ease);

            }, ui.globals.ease);

            ui.off('.' + ui.alerts.nameDialogBtnHolder + ' button', 'click');

            if (cancelCloseDialog) {

                ui.off('body', 'keydown.' + ui.alerts.eventCloseDialog);
                ui.off('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg, 'click.' + ui.alerts.eventCloseDialog);

            }

        };

        ui.alerts.dialog = function (props) {

            /*
            props list:
                props.msg
                props.error
                props.custom
                props.callback
            */

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            let dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            if (dialog !== undefined) { return; } // prevent multiple dialogues

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            let closeBtn = '';
            cancelCloseDialog = false;

            // create buttons
            let buttons = '';

            if (props.custom !== undefined) {

                for (let key in props.custom) {

                    const val = props.custom[key];

                    if (val !== '') {

                        buttons += '<button class="' + ui.alerts.nameDialogCustom + '" value="' + key + '">' +
                                        val +
                                    '</button>';

                    }

                }

            }

            let success;

            if (props.success === undefined) {
                success = ui.alerts.msgDialogSuccess;

            } else {
                success = props.success;
            }

            buttons += '<button class="' + ui.alerts.nameDialogSuccess + '" value="' + ui.alerts.successBtnValue + '">' +
                            success +
                        '</button>';

            if (props.error !== undefined) {

                buttons += '<button class="' + ui.alerts.nameDialogError + '" value="' + ui.alerts.errorBtnValue + '">' +
                                props.error +
                            '</button>';

                // create close icon
                cancelCloseDialog = true;

                closeBtn = '<button class="' + ui.alerts.nameCloseDialog + ' ' + ui.alerts.stylesCloseDialog + '">';

                if (ui.globals.inlineSvg) {
                    closeBtn += '<svg class="' + ui.alerts.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.alerts.closeIcon;

                } else {
                    closeBtn += '<svg class="' + ui.alerts.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.alerts.closeIcon + '"/>';
                }

                closeBtn += '</svg>' +
                        '</button>';
            }

            // create dialog
            const bgOld = ui.find('.' + ui.alerts.targetBg)[0];

            let html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' +

                        closeBtn +

                        '<div class="' + ui.alerts.nameDialogMsg + '">' +
                            props.msg +
                        '</div>' +
                        '<div class="' + ui.alerts.nameDialogBtnHolder + ' ' + ui.alerts.stylesDialogBtnHolder + '">' +
                            buttons +
                        '</div>' +

                    '</div>';

            if (bgOld === undefined) {

                html += '<div class="' + ui.alerts.targetBg + ' ' + ui.alerts.stylesBg + '">' +
                        '</div>';

            }

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            ui.addClass(document, ui.alerts.nameDialogOpened);

            const bgNew = ui.find('.' + ui.alerts.targetBg);

            // show dialog
            ui.addClass(bgNew, ui.alerts.nameOpen);

            setTimeout(() => {

                ui.addClass(bgNew, ui.alerts.nameOpenEase);
                setTimeout(() => {

                    dialog = ui.find('.' + ui.alerts.targetDialog);
                    ui.addClass(dialog, ui.alerts.nameShow);

                    ui.find('.' + ui.alerts.nameDialogSuccess)[0].focus(); // fosuc success button

                    setTimeout(() => {
                        ui.addClass(dialog, ui.alerts.nameShowEase);
                    }, 10);

                    // Event Listeners
                    ui.on('.' + ui.alerts.nameDialogBtnHolder + ' button',
                        'click',

                        function () {

                            let theme = '';

                            if (ui.hasClass(this, ui.alerts.nameDialogSuccess)) {
                                theme = ui.alerts.themeSuccess;

                            } else if (ui.hasClass(this, ui.alerts.nameDialogError)) {
                                theme = ui.alerts.themeDanger;
                            }

                            let msgTimer;

                            if (ui.alerts.dialogMessages) {
                                msgTimer = ui.globals.ease;

                            } else {
                                msgTimer = 0;
                            }

                            ui.alerts.closeDialog();
                            const msg = this.textContent;

                            setTimeout(() => {

                                // show message
                                if (ui.alerts.dialogMessages) {

                                    ui.alerts.message({
                                        msg: msg,
                                        theme: theme
                                    });

                                }

                                // callback
                                if (props.callback !== undefined) {

                                    setTimeout(() => { // wait for closing dialog and showing messages
                                        props.callback.call(this, this.value);
                                    }, ui.globals.ease * 2);

                                }

                            }, msgTimer);

                        });

                    if (cancelCloseDialog) { // attach close event listeners if props.error defined

                        const userCloseDialog = function () {

                            const errorBtn = ui.find('.' + ui.alerts.targetDialog + ' .' + ui.alerts.nameDialogError)[0];
                            ui.alerts.closeDialog();

                            if (ui.alerts.dialogMessages && errorBtn !== undefined) {

                                setTimeout(() => {

                                    ui.alerts.message({
                                        msg: errorBtn.textContent,
                                        theme: ui.alerts.themeDanger
                                    });

                                }, ui.globals.ease);

                            }

                        };

                        ui.on('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg,
                            'click.' + ui.alerts.eventCloseDialog,

                            userCloseDialog

                            );

                        ui.on('body',
                            'keydown.' + ui.alerts.eventCloseDialog,

                            function (e) {
                                if (e.keyCode === 27) { userCloseDialog(); } // esc
                            });

                    }

                }, ui.globals.ease);

            }, 10);

            return false;

        };

        // messages
        ui.alerts.closeMessage = function (win) {

            ui.removeClass(win, ui.alerts.nameShowEase);
            setTimeout(() => {

                ui.removeClass(win, ui.alerts.nameShow);

                if (win.parentNode !== null) {
                    win.parentNode.removeChild(win);
                }

            }, ui.globals.ease);

        };

        ui.alerts.message = function (props) {

            /*
            props list:
                props.msg
                props.pos
                props.theme
            */

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            // detect position
            const arrPos = [ui.alerts.posTopRight, ui.alerts.posTopLeft, ui.alerts.posBottomRight, ui.alerts.posBottomLeft];

            if (arrPos.indexOf(props.pos) < 0) {
                props.pos = ui.alerts.posDefault;
            }

            // detect theme
            let msgStyles = '';
            const arrTheme = [ui.alerts.themeSuccess, ui.alerts.themeWarning, ui.alerts.themeDanger];

            if (arrTheme.indexOf(props.theme) > -1) {
                msgStyles += ui.alerts.nameMsgThemePrefix + props.theme + ' ';

            } else if (ui.alerts.stylesMsgTheme !== '') {
                msgStyles += ui.alerts.stylesMsgTheme + ' ';
            }

            // create message
            let holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
            let html = '';

            if (holder === undefined) {
                html += '<div class="' + ui.alerts.nameMsgHolder + '">';
            }

            msgStyles += ui.alerts.stylesMsg;

            html += '<div class="' + ui.alerts.targetMsg + ' ' + ui.alerts.namePosPrefix + props.pos + ' ' + msgStyles + '">' +
                        props.msg +
                    '</div>';

            if (holder === undefined) {

                html += '</div>';
                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

            } else {

                holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
                holder.insertAdjacentHTML('beforeend', html);

            }

            // show message
            const message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
            ui.addClass(message, ui.alerts.nameShow);

            setTimeout(() => {

                ui.addClass(message, ui.alerts.nameShowEase);

                // move same position elements
                if (holder !== undefined) {

                    const prev = ui.find('.' + ui.alerts.targetMsg + '.' + ui.alerts.namePosPrefix + props.pos);
                    Array.prototype.forEach.call(prev,

                        (el, j, arr) => {

                            let slide = 0;

                            for (let i = (j + 1); i < arr.length; i++) {
                                slide += (prev[i].offsetHeight + 10);
                            }

                            if (props.pos === ui.alerts.posBottomRight || props.pos === ui.alerts.posBottomLeft) {
                                slide = -1 * slide;
                            }

                            prev[j].style.transform = 'translateY(' + slide + 'px)';

                        });

                }

                // auto close messages
                messageQueue.push(message);

                setTimeout(() => { // for manually closing messages by user

                    if (messageQueue[0] === undefined) { return; }

                    ui.alerts.closeMessage(messageQueue[0][0]);
                    messageQueue.shift();

                }, ui.alerts.messageTimer);

            }, 10);

        };

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.alerts.targetMsg,

            function () {

                Array.prototype.forEach.call(messageQueue,

                    (el, i) => {

                        if (el[0] === this) {
                            messageQueue.splice(i, 1);
                        }

                    });

                ui.alerts.closeMessage(this);

            });

    };

    // loaders
    ui.onload(ui.alerts.Start);

})();