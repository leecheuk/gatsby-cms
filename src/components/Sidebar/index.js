import React from 'react';
import {Link} from 'react-router-dom';
import styles from './sidebar.module.scss';

const Sidebar = () => {
    
    return (
        <div className={styles['sidebar']}>
            <ul className={styles['sidebar__list']}>
                <Link to="/profile"><li className={styles['sidebar__item']}>Profile</li></Link>
                <Link to="/"><li className={styles['sidebar__item']}>Dashboard</li></Link>
                <li className={styles['sidebar__item']}>Posts</li>
                <li className={styles['sidebar__item']}>Skills</li>
                <li className={styles['sidebar__item']}>Portfolio</li>
                <li className={styles['sidebar__item']}>Settings</li>
            </ul>
        </div>
    )
};

export default Sidebar;