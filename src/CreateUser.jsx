import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://server-render-n1ma.onrender.com/createUser", { name, email, age })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number" 
                            placeholder="Enter Age" 
                            className="form-control" 
                            value={age}
                            onChange={(e) => setAge(e.target.value)} 
                            required
                        />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
