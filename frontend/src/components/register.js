import React from "react";
import { useState } from "react";
import { FaUser } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const { name, email, password, password2 } = formData;
    const onChange = (e) => { 
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create Your Account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Name..." name="name" value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address..." name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password..." name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm Password..." name="password2" value={password2} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;