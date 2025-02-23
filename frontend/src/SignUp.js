//---------To-Do---------
//1.Change the Font
//2.Send requests to the backend
//3.Check proper alignment
//4.Make the Continue with Google a button
//5.Handle the form
//6.Implment the showPassword function
//-----------------------

import { Component, createRef } from "react";
import logo from './assets/logo.jpg';
import Recaptcha from 'react-google-recaptcha';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.recaptchaRef = createRef();
        //console.log("key = ", process.env.REACT_APP_KEY)
    } 

    showPassword = () => {
        console.log("Password");
    };

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100 bg-white">
                <div className="d-flex card px-0 py-3 border-0 shadow-none" style={{ width: "400px", height: "850px" }}>
                    <img src={logo} className="p-3 mx-auto d-block img-fluid w-75"></img>
                    <h2 className="text-center fw-bold" style={{ fontSize: "25px" }}>Create an account</h2>
                    
                    <form>
                        <div className="mb-3">
                            <div className="d-flex align-items-center">
                                <label className="fw-bold form-label">Name</label>
                            </div>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                                <input type="text" id="username" className="form-control border-0"></input>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex align-items-center">
                                <label className="fw-bold form-label">Email</label>
                            </div>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                                <input type="email" id="email" className="form-control border-0"></input>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex align-items-center">
                                <label className="fw-bold form-label">Password</label>
                            </div>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}>
                                <input type="password" id="password" className="form-control border-0 h-100"></input>
                                <button 
                                    className="m-1"
                                    style={{ 
                                        width: "48px",
                                        height: "38px",
                                        backgroundColor: "white",
                                        border: "None" 
                                    }}
                                    onClick={this.showPassword}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center text-muted py-2">
                            By continuing, you agree to our <span className="text-success px-1">terms and services.</span>
                        </div>

                        <Recaptcha
                            className="py-2"
                            ref={this.recaptchaRef}
                            sitekey={process.env.REACT_APP_KEY}
                        />
                        
                        <div className="mb-3" style={{ height: "47px" }} id="Submit">
                            <button className="border-0 w-100 text-white fw-bold" style={{ borderRadius: "5px", height: "100%", backgroundColor: "#5d12d2"}}>
                               Sign up 
                            </button>
                        </div>
                    </form>

                    <div className="d-flex align-items-center justify-content-center my-0" style={{ height: "80px" }}>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                        <span className="h-50 fw-bold bg-light text-secondary">or sign up with</span>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                    </div>

                    <div className="d-flex align-items-center justify-content-center bg-secondary" style={{ height: "50px", borderRadius: "5px" }}>
                        <img></img>
                        <span className="mt-2">Continue with Google</span>
                    </div>

                    <div className="py-3">
                        Already have an account? <span className="text-success">Sign in here</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
