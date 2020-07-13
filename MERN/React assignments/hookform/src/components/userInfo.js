import React from 'react';


const UserInfo = (props) => {
    const { formInfo } = props;
    return (
        <div>
            <h3>User Submitted Info</h3>
            <p>First Name: {formInfo.firstName}</p>
            <p>Last Name: {formInfo.lastName}</p>
            <p>Email: {formInfo.email}</p>
        </div>
    );
};

export default UserInfo;