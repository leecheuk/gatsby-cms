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
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/profile"><li className={styles['sidebar__item']}>Profile</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/"><li className={styles['sidebar__item']}>Dashboard</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/posts"><li className={styles['sidebar__item']}>Posts</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/skills"><li className={styles['sidebar__item']}>Skills</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/portfolio"><li className={styles['sidebar__item']}>Portfolio</li></NavLink>
                <NavLink activeClassName={styles['sidebar__link-active']} 
                    exact to="/settings"><li className={styles['sidebar__item']}>Settings</li></NavLink>
            </ul>
        </div>
    )
};

export default Sidebar;