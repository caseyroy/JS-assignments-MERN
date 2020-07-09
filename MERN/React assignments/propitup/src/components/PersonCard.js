import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            <div>
                <ul id="list">
                    <li><h2>Name:{this.props.lastname}, {this.props.firstname}</h2></li>
                    <li>Age: {this.props.age}</li>
                    <li>Hair Color: {this.props.haircolor}</li>
                </ul>

            </div>
        );
    }
}

export default PersonCard