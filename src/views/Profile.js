import React from 'react';
import {Link} from 'react-router-dom';
import LayoutMain from '../layouts/Main';
import GatsbyController from '../controllers/gatsbyController';

const Page1 = () => {
    let gc = new GatsbyController();
    console.log(gc.getConfig());
    return (
        <LayoutMain title="Profile">
            <button>edit</button>
            <div>
                {JSON.stringify(gc.getConfig())}
            </div>
        </LayoutMain>
    );
};

export default Page1;