import React, { Component, useState } from 'react';

const PersonCard = props => {
    const [age, setAge] = useState(props.age);
    const onclickhandler = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <ul id="list">
                <li><h2>Name:{props.lastname}, {props.firstname}</h2></li>
                <li>Age: {age}</li>
                <li>Hair Color: {props.haircolor}</li>
                <li><button onClick={onclickhandler}>Birthday Button for {props.firstname} {props.lastname}</button></li>
            </ul>
        </div>

    );
}

export default PersonCard