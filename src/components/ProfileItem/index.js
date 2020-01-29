import React from 'react';
import styles from './profileItem.module.scss';

const ProfileItem = ({label, title}) => {
    return (
        <li className={styles["list-item"]}>
            <div className={styles["label"]}>{label}: </div>
            <div className={styles["context"]}>{title}</div>
        </li>
    );
};

export default ProfileItem;