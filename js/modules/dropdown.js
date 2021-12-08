/*
 UI Dropdown JS
 Requires UI Core JS
*/

ui.dropdown = {

    // targets
    target: 'ui-dropdown',

    // main classnames
    nameMenu: 'ui-dropdown-menu',

    nameHover: 'ui-menu-hover',
    nameMenuTop: 'ui-menu-t',
    nameMenuLeft: 'ui-menu-l',
    nameMenuCenter: 'ui-menu-c',

    nameMenuPosRight: 'ui-menu-pos-r',
    nameMenuPosLeft: 'ui-menu-pos-l',

    nameNav: 'ui-nav',
    nameNavFullHor: 'ui-nav-full-h',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameSelected: 'ui-selected',

    // outer classnames
    nameBtn: 'ui-btn',
    nameSidebar: 'ui-sidebar',

    // tags
    tagMenuItems: 'li',

    tagValue: 'span',
    tagValueItems: 'label',

    // values
    scrollbarSize: 20,
    menuTopMargin: 1,

    // custom events
    eventClose: 'ui:dropdownClose'

};

(function () {

    /*globals window, document, ui, setTimeout, clearTimeout */

    var
        dropdownHoverTimer,
        dropdownOpenTimer,

        dropdownLeaveTimer,
        dropdownCloseTimer,

        listStyles,
        selectOpened,
        selectInContent,

        getScrollPos;

    function dropdownClose(innerParent) {

        if (selectOpened) { return; }

        var that, list;

        if (innerParent === undefined) {
            that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen);

        } else {
            that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen, innerParent);
        }

        ui.removeClass(that, ui.dropdown.nameOpenEase);

        clearTimeout(dropdownLeaveTimer);
        dropdownLeaveTimer = setTimeout(function () {

            ui.each(that,

                function () {

                    clearTimeout(dropdownCloseTimer);
                    list = ui.find('.' + ui.dropdown.nameMenu, this)[0];

                    dropdownCloseTimer = setTimeout(function () {

                        if (listStyles === 0) {
                            list.removeAttribute('style');

                        } else {

                            list.style.removeProperty('max-height');

                            list.style.removeProperty('position');
                            list.style.removeProperty('right');
                            list.style.removeProperty('left');

                            list.style.removeProperty('margin-left');
                            list.style.removeProperty('margin-top');

                            list.style.removeProperty('overflow');

                            list.style.removeProperty('transform-origin');
                            list.style.removeProperty('box-shadow');

                        }

                        ui.removeClass(that, ui.dropdown.nameMenuTop + ' ' + ui.dropdown.nameOpen);

                    }, ui.globals.ease);

                });

        }, 0);

    }

    ui.dropdown.Start = function () {

        function dropdownOpen(e, that) {

            e.preventDefault();
            e.stopPropagation();

            var list, alignSize, parent, offset, setMaxH, hasInner, inner, innerParent;

            inner = false;
            hasInner = false;

            parent = that.parentNode;

            clearTimeout(dropdownOpenTimer);
            dropdownOpenTimer = setTimeout(function () {

                innerParent = ui.closest(parent, '.' + ui.dropdown.target)[0];
                if ((ui.hasClass(parent, ui.dropdown.nameMenuPosRight) || ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {

                    // detecting inner dropdown positions
                    inner = true;
                    dropdownClose(innerParent);

                } else { dropdownClose(); }

                if (ui.find('.' + ui.dropdown.nameMenuPosRight, parent).length > 0 || ui.find('.' + ui.dropdown.nameMenuPosLeft, parent).length > 0) {

                    // detecting dropdown has inner dropdown positions
                    hasInner = true;
                }

                clearTimeout(dropdownOpenTimer);
                ui.addClass(parent, ui.dropdown.nameOpen);

                dropdownOpenTimer = setTimeout(function () {
                    ui.addClass(parent, ui.dropdown.nameOpenEase);
                }, dropdownHoverTimer / 6);

                offset = parent.getBoundingClientRect();
                list = ui.find('.' + ui.dropdown.nameMenu, parent)[0];

                if (hasInner) {
                    list.style.overflow = 'visible';
                }

                if (ui.closest(that, '.' + ui.dropdown.nameSidebar)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // diable all positionings on sidebars and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > ui.globals.sm) { // menu horizontal positioning: active

                        if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || (offset.left + list.offsetWidth + ui.dropdown.scrollbarSize) > window.innerWidth) {

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {

                            alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

                            if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                                list.style.marginLeft = -alignSize + 'px';
                            }

                        }

                    } else { // menu horizontal positioning: passive

                        list.style.marginLeft = -(offset.left - (ui.dropdown.scrollbarSize / 2)) + 'px';
                        list.style.width = (window.innerWidth - ui.dropdown.scrollbarSize) + 'px';

                    }

                }

                setMaxH = function (pos) { // set max-height of list

                    if (pos === 'default')  {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'pos')  {
                        list.style.maxHeight = window.innerHeight - (offset.top + ui.dropdown.scrollbarSize) + 'px';
                    }

                };

                if (ui.hasClass(parent, ui.dropdown.nameMenuPosRight)) { // right position menu

                    if (window.innerWidth > ui.globals.sm) { // right positioning: active

                        if (list.offsetWidth > (window.innerWidth - offset.left) - (list.offsetWidth + ui.dropdown.scrollbarSize)) {

                            list.style.top = 'inherit';
                            list.style.left = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top left';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // right positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.left = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) { // left position menu

                    if (window.innerWidth > ui.globals.sm) { // left positioning: active

                        if (offset.left - list.offsetWidth < ui.dropdown.scrollbarSize) {

                            list.style.top = 'inherit';
                            list.style.right = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top right';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // left positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.right = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {

                        if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // add top menu without full horizontal navigations

                            ui.addClass(parent, ui.dropdown.nameMenuTop);
                            list.style.removeProperty('transform-origin');

                        }

                        setMaxH('top');

                    } else { setMaxH('default'); }

                } else { setMaxH('default'); }

            }, dropdownHoverTimer);

            if (e.type === 'click') {

                setTimeout(function () {

                    ui.on(document,
                        'click.' + ui.dropdown.eventClose,

                        function (ev) {

                            var content = ui.closest(ev.target, '.' + ui.dropdown.nameMenu)[0];

                            // prevent for non listing contents
                            if (content !== undefined) {

                                if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) { // check other content classnames
                                    return;
                                }

                            }

                            if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameMenu) === 0) { // check full horizontal navigations
                                return;
                            }

                            if (ev.button !== 2) { // inherited right clicks

                                dropdownClose();
                                ui.off(document, 'click.' + ui.dropdown.eventClose);

                            }

                        });

                }, 0);

            }

        }

        // Event Listeners
        // open
        ui.on(document,
            'click',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameHover + '):not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameMobile + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                dropdownHoverTimer = 0;
                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                clearTimeout(dropdownLeaveTimer);
                dropdownHoverTimer = ui.globals.ease * 2;

                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpen + ' > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpenEase + ' .' + ui.dropdown.nameMenu,

            function () {

                dropdownHoverTimer = ui.globals.ease * 2;
                clearTimeout(dropdownLeaveTimer);

            });

        // form toggle
        ui.on(document,
            'click',

            '.' + ui.dropdown.target + ' ' + ui.dropdown.tagMenuItems + ' > ' + ui.dropdown.tagValueItems,

            function () {

                var p, target, input;

                p = ui.closest(this, '.' + ui.dropdown.target)[0];

                target = ui.find('.' + ui.dropdown.nameBtn + ' > ' + ui.dropdown.tagValue, p)[0];
                target.innerHTML = '';
                target.insertAdjacentHTML('beforeend', this.innerHTML);

                input = ui.find('input', target)[0];
                if (input !== undefined) {
                    input.parentNode.removeChild(input);
                }

                ui.removeClass(ui.find('.' + ui.dropdown.nameSelected, p), ui.dropdown.nameSelected);
                ui.addClass(this.parentNode, ui.dropdown.nameSelected);

            });

        // close
        ui.on(document,
            'mouseleave',

            '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                var that, innerParent;

                innerParent = ui.closest(this, '.' + ui.dropdown.target)[0];
                that = this;

                dropdownLeaveTimer = setTimeout(function () {

                    innerParent = ui.closest(that, '.' + ui.dropdown.target)[0];
                    if ((ui.hasClass(that, ui.dropdown.nameMenuPosRight) || ui.hasClass(that, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {

                        // detecting inner dropdown positions
                        dropdownClose(innerParent);

                    } else { dropdownClose(); }

                }, ui.globals.ease * 2);

            });

        ui.on(document,
            'mouseup',

            '.' + ui.dropdown.target + ':not(.' + ui.dropdown.nameNav + ') ' + ui.dropdown.tagMenuItems,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = ui.find('.' + ui.dropdown.target + ' .' + ui.dropdown.nameMenu + ' select');

        ui.on(document,
            'focus',

            selectInContent,

            function () { selectOpened = true; });

        ui.on(document,
            'blur',

            selectInContent,

            function () { selectOpened = false; });

        ui.on(document,
            'keyup',

            selectInContent,

            function (e) {

                if (e.keyCode == 27) {
                    selectOpened = false;
                }

            });

    };

    // Loaders
    ui.onload(ui.dropdown.Start);

    ui.on(window,
        'resize',

        function () {

            if (window.innerWidth === getScrollPos) { return; } // close only horizontal resizing

            dropdownClose();
            getScrollPos = window.innerWidth;

        });

}());
