import React from "react";
import { useState } from "react";
import axios from 'axios';

function AddRides() {

    const [input, setInput] = useState({
        brand:'',
        model:''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRide = {
            brand: input.brand,
            model: input.model
        }
        
        axios.post('http://localhost:4000/addrides', newRide)
    };

    return (
        <div>
            <main>
                <h1>Add a Ride</h1>
                <form>
                    <div>
                        <label>Brand: </label>
                        <input onChange={handleChange} name='brand' value={input.brand} />
                    </div>
                    <div>
                        <label>Model: </label>
                        <input onChange={handleChange} name='model' value={input.model} />
                    </div>
                </form>
                <input type="submit" onClick={handleSubmit} />
            </main>
        </div>
    )
}

export default AddRides;