import React from 'react';
import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles['sidebar']}>
            <ul className={styles['sidebar__list']}>
                <li className={styles['sidebar__item']}>Profile</li>
                <li className={styles['sidebar__item']}>Posts</li>
                <li className={styles['sidebar__item']}>Skills</li>
                <li className={styles['sidebar__item']}>Portfolio</li>
                <li className={styles['sidebar__item']}>Settings</li>
            </ul>
        </div>
    )
};

export default Sidebar;