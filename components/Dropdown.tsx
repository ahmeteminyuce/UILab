import * as React from 'react';

// imports
import { DropdownProps, DropdownMenuProps, DropdownItemProps } from './_Models';

// assets
import '../less/modules/dropdown';
import '../js/modules/dropdown';

const Dropdown = function (

    { children, hover, block, align, pos, nav, className, style }:DropdownProps) {

        // classes
        const setHover = hover ? ' ui-menu-hover' : '';
        const setBlock = block ? ' ui-block' : '';
        const setAlign = align ? ` ui-menu-${align}` : '';
        const setPos = pos ? ` ui-menu-pos-${pos}` : '';

        let setNav = '';

        if (nav) {
            setNav = nav === true ? ' ui-nav' : ' ui-nav ui-nav-full-h';
        }

        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-dropdown${setHover}${setBlock}${setAlign}${setPos}${setNav}${setClassName} ui-ease-dropdown`;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

const DropdownMenu = function (

    { children, as, hasIcon, className, style }:DropdownMenuProps) {

        // classes
        const setHasIcon = hasIcon ? ' ui-dropdown-has-icon' : '';

        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-dropdown-menu${setHasIcon}${setClassName}`;

        return (
            <>
            {as === 'div' &&
                <div className={classes} style={style}>
                    {children}
                </div>
            }
            {as === 'span' &&
                <span className={classes} style={style}>
                    {children}
                </span>
            }
            {(as !== 'div' && as !== 'span') &&
                <ul className={classes} style={style}>
                    {children}
                </ul>
            }
            </>
        );
    }

const DropdownItem = function (

    { children, onClick, onMouseDown, onMouseUp, selected, className, style }:DropdownItemProps) {

        // classes
        const setSelected = selected ? ' ui-selected' : '';
        const setClassName = className ? ` ${className}` : '';

        let classes: any = setSelected + setClassName;
        classes = classes.replace(/^\s+/g, ''); // remove first spaces

        if (classes === '') { classes = null; }

        return (
            <li className={classes} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                {children}
            </li>
        );
    }

export default Object.assign(Dropdown, {
    Menu: DropdownMenu,
    Item: DropdownItem,
});