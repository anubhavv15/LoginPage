import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignup = () => {
    const [action, setAction] = useState(""); // "" = landing

    return (
        <div className="container">

            {/* 🔹 Landing Page */}
            {action === "" && (
                <div className="landing">
                    <h1>Welcome to PopX</h1>
                    <p>Create an account or login to continue</p>

                    <button onClick={() => setAction("Sign Up")}>
                        Create Account
                    </button>
                    <button onClick={() => setAction("Login")}>
                        Already Registered ? Login
                    </button>
                </div>
            )}

            {/* 🔹 Form Section */}
            {action !== "" && (
                <div className="form-box">

                    <div className="header">
                        <h2>
                            {action === "Sign Up"
                                ? "Create Your PopX Account"
                                : "Signin to your PopX account"}
                        </h2>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">

                        {/* 🔹 SIGN UP FORM */}
                        {action === "Sign Up" && (
                            <>
                                <div className="input">
                                    <img src={user_icon} alt="" />
                                    <input type="text" placeholder="Full Name" />
                                </div>

                                <div className="input">
                                    <input type="tel" placeholder="Phone Number" />
                                </div>

                                <div className="input">
                                    <img src={email_icon} alt="" />
                                    <input type="email" placeholder="Email Address" />
                                </div>

                                <div className="input">
                                    <img src={password_icon} alt="" />
                                    <input type="password" placeholder="Password" />
                                </div>

                                <div className="input">
                                    <input type="text" placeholder="Company Name" />
                                </div>

                                {/* 🔹 Agency Option */}
                                <div className="agency">
                                    <p>Are you an Agency?</p>
                                    <label>
                                        <input type="radio" name="agency" /> Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="agency" /> No
                                    </label>
                                </div>
                            </>
                        )}

                        {/* 🔹 LOGIN FORM */}
                        {action === "Login" && (
                            <>
                                <div className="input">
                                    <img src={email_icon} alt="" />
                                    <input type="email" placeholder="Email" />
                                </div>

                                <div className="input">
                                    <img src={password_icon} alt="" />
                                    <input type="password" placeholder="Password" />
                                </div>
                            </>
                        )}
                    </div>

                    {action === "Login" && (
                        <div className="forgot-password">
                            Lost Password? <span>Click Here!</span>
                        </div>
                    )}

                    {/* ✅ Submit Button */}
                    <button className="submit-btn">
                        {action === "Login" ? "Sign In" : "Create Account"}
                    </button>

                    {/* 🔹 Switch Option */}


                </div>
            )}
        </div>
    );
};

export default LoginSignup;