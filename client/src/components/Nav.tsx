import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        (
            async ()=>{
                const response = await fetch('http://localhost:8000/user', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });
                const content = await response.json();
                setName(content.name)
            }
        )();
    });

    const logout = async()=>{
        await fetch('http://localhost:8000/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
    }



    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Home</Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" >Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addCar" className="nav-link" >Add car</Link>
                        </li>
                    </ul>
                    {/*<form className="d-flex">*/}
                    {/*    <input className="form-control me-2" type="search"*/}
                    {/*           placeholder="Search" aria-label="Search"/>*/}
                    {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </nav>
    );
};

export default Nav;