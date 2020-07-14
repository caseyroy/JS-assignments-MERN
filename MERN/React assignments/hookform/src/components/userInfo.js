import React from 'react';


const UserInfo = (props) => {
    const { formInfo, hasBeenSubmitted } = props;

    return (
        <div>
            <h3>User Submitted Info</h3>
            <p>First Name: {hasBeenSubmitted ? formInfo.firstName : ''}</p>
            <p>Last Name: {hasBeenSubmitted ? formInfo.lastName : ''}</p>
            <p>Email: {hasBeenSubmitted ? formInfo.email : ''}</p>
        </div>
    );
};

export default UserInfo;