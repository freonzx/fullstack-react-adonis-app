import React, { Component } from "react"
import api from "../api"

class SignIn extends Component {
    render() {
        return (
            <div
                className="container"
                align="center"
                style={{ marginTop: "60px" }}
            >
                <input placeholder="Email Address" value="" onChange="" />
                <br />
                <input placeholder="Password" value="" onChange="" />
                <br />
                <button>Login</button>
                <br />
                <a href="">Sign Up</a>
            </div>
        )
    }
}

export default SignIn
