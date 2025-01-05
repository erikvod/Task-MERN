import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const { email, password } = formData;
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
                    <FaSignInAlt /> Register
                </h1>
                <p>Login to start creating tasks</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address..." name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password..." name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;