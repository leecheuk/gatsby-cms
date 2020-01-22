import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './sidebar.module.scss';

const Sidebar = () => {
    let activeStyle = {
        background: '#41454c',
        color: '#FFF'
    }
    return (
        <div className={styles['sidebar']}>
            <ul className={styles['sidebar__list']}>
                <NavLink activeClassName={styles['sidebar__link-active']} exact to="/profile"><li className={styles['sidebar__item']}>Profile</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} exact to="/"><li className={styles['sidebar__item']}>Dashboard</li></NavLink>
                <li className={styles['sidebar__item']}>Posts</li>
                <li className={styles['sidebar__item']}>Skills</li>
                <li className={styles['sidebar__item']}>Portfolio</li>
                <li className={styles['sidebar__item']}>Settings</li>
            </ul>
        </div>
    )
};

export default Sidebar;