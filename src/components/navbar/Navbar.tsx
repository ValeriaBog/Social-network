import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' className={({ isActive }) =>
                isActive ? classes.active : undefined
            }>Profile</NavLink>
            </div>
            <div className={classes.item}><NavLink to='/dialogs' className={({ isActive }) =>
                isActive ? classes.active : undefined
            }>Message</NavLink></div>
            <div className={classes.item}><NavLink to='/news' className={({ isActive }) =>
                isActive ? classes.active : undefined
            }>News</NavLink></div>
            <div className={classes.item}><NavLink to='/music' className={({ isActive }) =>
                isActive ? classes.active : undefined
            }>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/setting' className={({ isActive }) =>
                isActive ? classes.active : undefined
            }>Setting</NavLink></div>
        </nav>
    );
}

export default Navbar;