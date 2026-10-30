import React from "react";
import "./App.css";

function App() {
    return(
        <div className="App">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-p">P</span>
                </div>

                <div className="nav-links">
                    <a href="#">Personal <span>v</span></a>
                    <a href="#">Business <span>v</span></a>
                    <a href="#">Partners <span>v</span></a>
                    <a href="#">Useful Info <span>v</span></a>
                </div>

                <div className="nav-buttons">
                    <button className="login">Log In</button>
                    <button className="signup">Sign Up</button>
                </div>
            </nav>

                {/* Hero Section */}
                <section className="hero">
                    <div className="toggle">
                        <button>Personal</button>
                        <button className="active">Business</button>
                    </div>

                    <h1>PayPal Open</h1>
                    <h2>One platform for your business needs</h2>

                    <p>
                        PayPal Open unifies your PayPal business solutions to help
                        you get paid, get growing, and get ahead.
                    </p>

                    <div className="hero-buttons">
                        <button className="signup">Sign Up</button>
                        <button className="contact">Contact Sales</button>
                    </div>
                </section>
            </div>
       
                    




    );
    
}
export default App;