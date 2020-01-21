import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';
import Title from '../components/Title';

const Main = ({children}) => {
    return (
        <div className={styles["layout__main"]}>
            <Title/>
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node
}

export default Main;