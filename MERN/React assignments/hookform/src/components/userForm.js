import React, { useState } from 'react';


const UserForm = (props) => {
    const { formData, formResults, hasBeenSubmitted, setHasBeenSubmitted } = props;
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onChange = (e) => {
        formResults({
            ...formData,
            [e.target.name]: e.target.value
        });
        let val = e.target.value;
        let err = "";
        switch (e.target.name) {
            case "firstName":
            case "lastName":
                if (val.length > 0 && val.length < 2) {
                    err = "name error"
                }
                break;
            case "email":
                if (val.length > 0 && val.length < 5) {
                    err = "email error"
                }
                break;
            case "password":
            case "confirmPassword":
                if (val.length > 0 && val.length < 8 && formData.password == formData.confirmPassword) {
                    err = "password error"
                }
            default:
        }
        setErrors({
            ...errors,
            [e.target.name]: err
        });
    };
    const createUser = (e) => {
        e.preventDefault();
        setHasBeenSubmitted(true);
        const newUser = { formData };
    }
    const formMessage = () => {
        if (hasBeenSubmitted(true)) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    return (
        <div>
            <h3>Submit Your Information</h3>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for your form submission</h3> :
                        <h3>Please submit the form</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input onChange={onChange} type="text" name="firstName" />
                    {
                        errors.firstName ?
                            <p style={{ color: 'red' }}>Frist Name must be at least 2 characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={onChange} type="text" name="lastName" />
                    {
                        errors.lastName ?
                            <p style={{ color: 'red' }}>Last Name must be at least 2 characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={onChange} type="email" name="email" />
                    {
                        errors.email ?
                            <p style={{ color: 'red' }}>Email must be at least 5 characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={onChange} type="password" name="password" />
                    {
                        errors.password ?
                            <p style={{ color: 'red' }}>Password must match and  be at least 8 characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={onChange} type="password" name="confirmPassword" />
                    {
                        errors.confirmPassword ?
                            <p style={{ color: 'red' }}>Password must match and be at least 8 characters</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div >
    );
};

export default UserForm;