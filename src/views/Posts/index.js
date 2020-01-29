import React from 'react';
import LayoutMain from '../../layouts/Main';
import styles from './posts.module.scss';

const Posts = () => {
    return (
        <LayoutMain title="Posts">
            <button className={styles["btn"]}>New</button>
            <table className={styles["table"]}>
                <thead>
                    <tr className={styles["table-header"]}>
                        <th>Title</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles["table-item"]}>
                        <td>How write a best-seller in 10 years?</td>
                        <td>
                            05-12-20
                    </td>
                        <td>
                            <button>Edit</button>
                        </td>
                    </tr>
                    <tr className={styles["table-item"]}>
                        <td>Fastest way to become successful, 10000 hours</td>
                        <td>
                            15-09-20
                    </td>
                        <td>
                            <button>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </LayoutMain>
    );
};

export default Posts;