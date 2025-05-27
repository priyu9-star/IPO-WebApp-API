import {React, useState} from "react";
import logo from '../assets/logo.jpg';
import Recaptcha from 'react-google-recaptcha';
import {FaEye} from 'react-icons/fa';
import googlelogo from '../assets/google-logo.jpg';

const SignUp = () => {
    const [passwordVisible, setpasswordVisible] = useState(false);
    const [captcha, setCaptcha] = useState(null);

    const showPassword = () => {
        setpasswordVisible((prevVisibilty) => !prevVisibilty);
    } 

    const handleCaptcha = (token) => {
        setCaptcha(token);
    }

    const signUp = () => {
        if(captcha === null) {
            alert("Complete the captcha"); 
        }
        else {
            let SignUpData = {
                name: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            }

            //send the data to the backend
        }
    } 

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="d-flex card px-0 py-3 border-0 shadow-none" style={{ backgroundColor: "inherit", width: "400px", height: "850px" }}>
                <img src={logo} className="p-3 mx-auto d-block img-fluid w-75"></img>
                <h2 className="text-center fw-bold" style={{ fontSize: "25px" }}>Create an account</h2>
                
                <form>
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <label className="fw-bold form-label">Name</label>
                        </div>
                        <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                            <input type="text" id="username" className="m-0 form-control border-0"></input>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <label className="fw-bold form-label">Email</label>
                        </div>
                        <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                            <input type="email" id="email" className="m-0 form-control border-0"></input>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <label className="fw-bold form-label">Password</label>
                        </div>
                        <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}>
                            <input type={ passwordVisible? "text": "password" } id="password" className="m-0 form-control border-0 h-100"></input>
                            <button 
                                className="m-0 h-100"
                                style={{ 
                                    width: "48px",
                                    height: "38px",
                                    backgroundColor: "white",
                                    border: "None" 
                                }}
                                onClick={showPassword}
                            >
                                <FaEye className="view-icon" title="View"  style={{ color: "grey"  }}/>
                            </button>
                        </div>
                    </div>

                    <div className="d-flex align-items-center text-muted py-2">
                        By continuing, you agree to our <span className="text-success px-1">terms and services.</span>
                    </div>

                    <Recaptcha
                        className="py-2"
                        sitekey={process.env.REACT_APP_KEY}
                        onChange={handleCaptcha}
                    />
                    
                    <div className="mb-3" style={{ height: "47px" }} id="Submit">
                        <button className="border-0 w-100 text-white fw-bold" onClick={signUp} style={{ borderRadius: "5px", height: "100%", backgroundColor: "#5d12d2"}}>
                           Sign up 
                        </button>
                    </div>
                </form>

                <div className="d-flex align-items-center justify-content-center my-0" style={{ height: "80px" }}>
                    <hr className="flex-grow-1 opacity-50 border-secondary" />
                    <span className="m-2 h-50 fw-bold bg-light text-secondary">or sign up with</span>
                    <hr className="flex-grow-1 opacity-50 border-secondary" />
                </div>

                <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#e4e7eb", height: "50px", borderRadius: "5px" }}>
                    <img src={googlelogo} alt="Google" style={{ width: "30px", marginRight: "10px" }} />
                    <span>Continue with Google</span>
                </div>

                <div className="py-3">
                    Already have an account? <span className="text-success"><a className="text-decoration-none" href="/">Sign in here</a></span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
