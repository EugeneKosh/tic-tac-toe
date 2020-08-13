import React from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {ThemeModeSwap} from "./ThemeModeSwap"

export const ThemeSwitchButton = () => {


    return (
        <div className={'navbar_themeSwitch themeSwitch'}>
            <input type="checkbox" className="themeSwitch_checkbox" id="themeSwitch_checkbox" onChange={ThemeModeSwap}/>
            <label className="themeSwitch_label" htmlFor="themeSwitch_checkbox">
                <FaMoon className={'themeSwitch_icon-moon'} />
                <FaSun className={'themeSwitch_icon-sun'} />
                <div className="themeSwitch_trigger"> </div>
            </label>
        </div>
    )
}