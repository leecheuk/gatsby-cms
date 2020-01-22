import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../layouts/Main';
import GatsbyController from '../controllers/gatsbyController';

const Dashboard = () => {
    const gc = new GatsbyController();
    const [serverStarted, setServerStarted] = useState(false);
    const toggleServer = () => {
        setServerStarted((state, props) => {
            console.log('state', state)
            if (state === true) {
                gc.stop();
            } else {
                gc.start();
            }
            return !state;
        });
    }
    return (
        <LayoutMain title="Dashboard">
            <button onClick={toggleServer}>{serverStarted ? "Stop" : "Start"} web server</button>
        </LayoutMain>
    );
};

export default Dashboard;