import React from 'react';
import {Link} from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            Page 1
            <Link to="/page2">page2</Link>
        </div>
    );
};

export default Page1;