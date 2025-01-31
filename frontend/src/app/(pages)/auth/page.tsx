"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const AuthTabs = (props: any) => {
    
    const searchParam = useSearchParams()
    const page = searchParam.get('page')
    const [showLogin, SetShowLogin] = useState(page == 'signup' ? false : true)

    return (
        <>
            <div className="auth-outer-cont">
            <div className="w-25 auth-container ">
                {/* Pills Navs */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${showLogin ? 'active' : ''}`}
                            id="tab-login"
                            role="tab"
                            onClick={()=>SetShowLogin(true)}
                        >
                            Login
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${!showLogin ? 'active' : ''} `}
                            id="tab-register"
                            role="tab"
                            onClick={()=>SetShowLogin(false)}
                        >
                            Register
                        </button>
                    </li>
                </ul>
                {/* Pills Content */}
                <div className="tab-content">
                    {/* Login Form */}
                    <div
                        className={`tab-pane fade ${showLogin ? 'show active' : ''}`}
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                {["facebook-f", "google", "twitter", "github"].map((platform) => (
                                    <button
                                        key={platform}
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1"
                                    >
                                        <i className={`fab fa-${platform}`}></i>
                                    </button>
                                ))}
                            </div>
                            <p className="text-center">or:</p>
                            <div data-mdb-input-init className="form-outline mb-2">
                                <input type="email" id="loginName" className="form-control" />
                                <label className="form-label" htmlFor="loginName">
                                    Email or username
                                </label>
                            </div>
                            <div data-mdb-input-init className="form-outline mb-2">
                                <input type="password" id="loginPassword" className="form-control" />
                                <label className="form-label" htmlFor="loginPassword">
                                    Password
                                </label>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="loginCheck"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="loginCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>
                            <button
                                type="submit"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-4"
                            >
                                Sign in
                            </button>
                            <div className="text-center">
                                <p>
                                    Not a member? <a href="#!">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* Register Form */}
                    <div
                       className={`tab-pane fade ${!showLogin ? 'show active' : ''}`}
                        id="pills-register"
                        role="tabpanel"
                        aria-labelledby="tab-register"
                    >
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                {["facebook-f", "google", "twitter", "github"].map((platform) => (
                                    <button
                                        key={platform}
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-link btn-floating mx-1"
                                    >
                                        <i className={`fab fa-${platform}`}></i>
                                    </button>
                                ))}
                            </div>
                            <p className="text-center">or:</p>
                            {[
                                { id: "registerName", label: "Name", type: "text" },
                                { id: "registerUsername", label: "Username", type: "text" },
                                { id: "registerEmail", label: "Email", type: "email" },
                                { id: "registerPassword", label: "Password", type: "password" },
                                { id: "registerRepeatPassword", label: "Repeat password", type: "password" },
                            ].map(({ id, label, type }) => (
                                <div key={id} data-mdb-input-init className="form-outline mb-2">
                                    <input type={type} id={id} className="form-control" />
                                    <label className="form-label" htmlFor={id}>
                                        {label}
                                    </label>
                                </div>
                            ))}
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    id="registerCheck"
                                    defaultChecked
                                    aria-describedby="registerCheckHelpText"
                                />
                                <label className="form-check-label" htmlFor="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>
                            <button
                                type="submit"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-3"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <style>{`
            .root-container{height: 100vh;width: 100vw;}
            .auth-container{
                border:2px solid #0d6efd;
                box-sizing: content-box;
                padding: 30px;
                border-radius: 20px;
                height: calc(100% - 200px);
            }
            .auth-outer-cont{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
            }
            `}</style>            
        </>
    );
};

export default AuthTabs;
