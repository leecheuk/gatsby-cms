import React from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../layouts/Main';

const Dashboard = () => {
    return (
        <LayoutMain title="Dashboard">
            <button>Start web server</button>
        </LayoutMain>
    );
};

export default Dashboard;