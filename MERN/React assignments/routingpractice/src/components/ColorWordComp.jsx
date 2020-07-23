import React from 'react';
import { Link } from '@reach/router';

const ColorWordComp = (props) => {
    const { word, colorOne, colorTwo } = props;


    return (
        <div>
            <h1 style={{ backgroundColor: colorOne, color: colorTwo }}>The Word is {word}</h1>
            <hr />
            <ul style={{ listStyleType: "none" }}>
                <li><Link to='/'>Back to where you started</Link></li>
                <h3>Or...</h3>
                <li><Link to='/"type in the url bar to change the word'>The Word or Number</Link></li>
            </ul>
        </div >
    );
}

export default ColorWordComp;