import React from 'react';


const UserForm = (props) => {
    const { formData, formResults } = props;
    const onChange = e => {
        formResults({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password, confirmPassword };
    //     console.log("Welcome", newUser);
    // };

    return (
        <div>
            <h3>Submit Your Information</h3>
            <form >
                <div>
                    <label>First Name: </label>
                    <input onChange={onChange} type="text" name="firstName" />
                    {/* <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} /> */}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={onChange} type="text" name="lastName" />
                    {/* <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} /> */}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={onChange} type="email" name="email" />
                    {/* <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} /> */}
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={onChange} type="password" name="password" />
                    {/* <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} /> */}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={onChange} type="password" name="confirmPassword" />
                    {/* <input type= "text" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                </div>
            </form>
        </div>
    );
};

export default UserForm;