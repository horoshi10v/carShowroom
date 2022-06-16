import React, {SyntheticEvent, useState} from 'react';
// @ts-ignore
import {Navigate, Redirect} from "react-router-dom";

const AddCar = () => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [transmission, setTransmission] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const [engine_type, setEngineType] = useState('');
    const [engine_size, setEngineSize] = useState('');
    const [engine_power, setEnginePower] = useState('');
    const [engine_fuel_consumption, setEngineFuelConsumption] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await fetch('http://localhost:8000/addCar', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    brand,
                    name,
                    type,
                    transmission,
                    color,
                    image,
                    description,
                engine: { engine_type,
                    engine_size,
                    engine_power,
                    engine_fuel_consumption}
                }
            )
        });
       // setRedirect(true)
    }
    if(redirect){
        return <Navigate to="/cars" replace={true}/>
    }


    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-5 fw-normal">Please add new car</h1>
            <div className="form-floating mb-3">
                <input className="form-control" id="floatingInput" placeholder="Name"
                       onChange={event => setName(event.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form mb-3">
                <select className="form-select" id="state" required onChange={event => setBrand(event.target.value)}>
                    <option value="">Choose brand</option>
                    <option>BMW</option>
                    <option>Tesla</option>
                </select>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Text"
                       onChange={event => setColor(event.target.value)}
                />
                <label htmlFor="floatingPassword">Color</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Text"
                       onChange={event => setEnginePower(event.target.value)}
                />
                <label htmlFor="floatingPassword">Power</label>
            </div>
            <button className="w-200 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default AddCar;