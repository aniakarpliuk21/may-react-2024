import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export default Menu;