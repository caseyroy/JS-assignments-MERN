import React from 'react';
import { Link } from '@reach/router';

const WelcomeComp = (props) => {


    return (
        <div>
            <h1>Welcome</h1>
            <hr />
            <ul style={{ listStyleType: "none" }}>
                <li><Link to='/'>Back to where you started</Link></li>
                <h3>Or...</h3>
                <li><Link to='/hello/word'>The Word or Number</Link></li>
                <li><Link to='/"type word/color(for backgroud)/color(for text) to chang the output"/blue/red'>The Crazy Word</Link></li>
            </ul>
        </div >
    );
}

export default WelcomeComp;