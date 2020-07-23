import React from 'react';
import { Link } from '@reach/router'


const WordNumComp = (props) => {
    const { wordNum } = props;
    if (isNaN(wordNum) === true) {

        return (
            <div>
                <h1>The Word is: {wordNum}</h1>
                <hr />
                <Link to='/'>Back to where you started</Link>
                <h3>Or...</h3>
                <Link to='/"type word/color(for backgroud)/color(for text) to chang the output"/blue/red'>The Crazy Word</Link>
            </div>
        );
    }
    else {
        return (

            <div>
                <h1>The number is: {wordNum}</h1>
                <hr />
                <ul style={{ listStyleType: "none" }}>
                    <li><Link to='/'>Back to where you started</Link></li>
                    <h3>Or...</h3>
                    <li><Link to='"what is in the url bar"'>The Word Is</Link></li>
                    <li><Link to='/"type word/color(for backgroud)/color(for text) to chang the output"/blue/red'>The Crazy Word</Link></li>
                </ul>
            </div>
        );
    };

};

export default WordNumComp;