import * as React from 'react';
import { Link } from 'react-router-dom';

// assets
import "@less/modules/buttons";

interface ButtonProps {

    children?: React.ReactNode,

    title?: string,
    to?: string,

    active?: boolean;
    passive?: boolean;
    multi?: boolean;
    square?: boolean;
    ghost?: boolean;

    noease?: boolean;

    type?: 'submit' | 'button' | 'reset',
    size?: 'lg' | 'sm' | 'xs',
    fluid?: 'md' | 'sm' | 'xs',

    className?: string,
    data?: any,

}

const Button = function (

    { children, title, to, active, passive, multi, square, ghost, noease, type, size, fluid, className, data }:ButtonProps) {

        // classes
        const setActive = passive ? ' ui-btn-passive' : '';
        const setPassive = active ? ' ui-btn-active' : '';

        const setMulti = multi ? ' ui-btn-multi' : '';
        const setSquare = square ? ' ui-btn-square' : '';
        const setGhost = ghost ? ' ui-btn-ghost' : '';

        const setEase = noease ? '' : ' ui-ease-btn';

        const setSize = size ? ' ui-btn-' + size : '';
        const setFluid = fluid ? ' ui-btn-' + fluid + '-fluid' : '';

        const setclassName = className ? ' ' + className : '';

        const classes = "ui-btn" + setSize + setFluid + setActive + setPassive + setMulti + setSquare + setGhost + setclassName + setEase;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = "data-ui-" + name;
            setData[attr] = data[name];

        }

        return (
            <>
                {to ? (

                    <Link to={to} title={title} type={type} className={classes} {...setData}>
                        {children}
                    </Link>

                ) : (

                    <button title={title} type={type} className={classes} {...setData}>
                        {children}
                    </button>

                )}
            </>
        );
    }

interface ButtonWrapperProps {

    children?: React.ReactNode,

    ease: '1st' | '2nd',

    className?: string,
    data?: any,

}

const ButtonWrapper = function (

    { children, ease, className, data }:ButtonWrapperProps) {

        // classes
        const setEase = ease ? 'ui-ease-' + ease + '-btn' : '';
        const setclassName = className ? ' ' + className : '';

        const classes = setEase + setclassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = "data-ui-" + name;
            setData[attr] = data[name];

        }

        return (
            <>
                <div className={classes} {...setData}>
                    {children}
                </div>
            </>
        );

    }

export default Object.assign(Button, {
    Wrapper: ButtonWrapper,
});