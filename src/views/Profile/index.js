import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import LayoutMain from '../../layouts/Main';
import GatsbyController from '../../controllers/gatsbyController';
import styles from './profile.module.scss';

import ProfileItem from '../../components/ProfileItem';

const Profile = () => {
    let [config, setConfig] = useState(null);
    useEffect(() => {
        let gc = new GatsbyController();
        let {data} = gc.getConfig();
        setConfig(data);
    }, []);

    /**
     * Render config object by recursion
     * 
     * @param {object} obj - config object
     */
    const renderConfig = (obj) => {
        return Object.keys(obj).map(key => {
            if (typeof obj[key] !== 'object') {
                return configItem(config, key);
            } else if (typeof obj[key] === 'object') {
                return renderConfig(obj[key]);
            }
        });
    }
    const configItem = (obj, key) => {
            return (
                <li>
                    <span>{key}:</span> {obj[key]}
                </li>
            )
    }
    return (
        <LayoutMain title="Profile">
            <div className={styles["container"]}>
                <button className={styles["button"]}>edit</button>
                {/* <ul>
                {config ? renderConfig(config) : null}
            </ul> */}
                <h2 className={styles["section-title"]}>Website</h2>
                {config &&
                    <>
                        <ul className={styles["list"]}>
                            <ProfileItem label={"Title"} title={config.title} />
                            <ProfileItem label={"Subtitle"} title={config.subtitle} />
                            <ProfileItem label={"Url"} title={config.url} />
                            <ProfileItem label={"Copyright"} title={config.copyright} />
                        </ul>
                        <h2 className={styles["section-title"]}>Author</h2>
                        <ul className={styles["list"]}>
                            <ProfileItem label={"Name"} title={config.author.name} />
                            <ProfileItem label={"Photo Url"} title={config.author.photo_url} />
                            <ProfileItem label={"Bio"} title={config.author.bio_description} />
                        </ul>
                        <h2 className={styles["section-title"]}>Contacts</h2>
                        <ul className={styles["list"]}>
                        {Object.keys(config.author.contacts).map((key, i) => (
                                <ProfileItem label={key} key={i} title={config.author.contacts[key]} />
                            ))}
                        </ul>
                    </>
                }
            </div>
        </LayoutMain>
    );
};

export default Profile;