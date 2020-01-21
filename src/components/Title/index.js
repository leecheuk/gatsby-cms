import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

const Title = ({title, subtitle}) => {
    return (
        <h1 className={styles["title"]}>
            {title} <span className={styles["subtitle"]}>{subtitle}</span>
        </h1>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default Title;
