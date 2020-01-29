import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';
import Title from '../../components/Title';

const Main = ({children, title, subtitle}) => {
    return (
        <div className={styles["layout-main"]}>
            <Title title={title} subtitle={subtitle}/>
            <div className={styles["layout__body-main"]}>
                {children}
            </div>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Main;