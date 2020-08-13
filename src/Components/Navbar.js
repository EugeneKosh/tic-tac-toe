import React from "react";
import {ThemeSwitchButton} from "./ThemeSwitchButton/ThemeSwitchButton";

export const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_brand'}>
                Tic-Tac-Toe
            </div>
            <ThemeSwitchButton />
        </nav>
    )
}