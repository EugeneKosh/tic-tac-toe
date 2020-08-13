import React from "react";
import {FaMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'

export const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_brand'}>
                Tic-Tac-Toe
            </div>
            <div className={'navbar_themeSwitch themeSwitch'}>
                <input type="checkbox" className="themeSwitch_checkbox" id="themeSwitch_checkbox"/>
                <label className="themeSwitch_label" htmlFor="themeSwitch_checkbox">
                    <FaMoon className={'themeSwitch_icon-moon'} />
                    <FaSun className={'themeSwitch_icon-sun'} />
                    <div className="themeSwitch_trigger"> </div>
                </label>
            </div>
        </nav>
    )
}