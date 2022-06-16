import React, {SyntheticEvent, useState} from 'react';
// @ts-ignore
import {Navigate, Redirect} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    name,
                    email,
                    password
                }
            )
        });
        setRedirect(true)
    }
    if(redirect){
        return <Navigate to="/login" replace={true}/>
    }


    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="Name"
                    onChange={event => setName(event.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                       onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                       onChange={event => setPassword(event.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Register;