import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row  center-align section">
          <div className="loginButtonSection">
            <div className=" col s12">
              <h5>
                Login or{" "}
                <a className="cyan-text text-darken-3" href="">
                  Signup
                </a>
              </h5>
            </div>
            <div className="col s12 loginButton">
              <a
                href="/auth/google"
                className="waves-effect waves-light btn-large social google"
              >
                <i className="fa fa-google left" /> Continue with Google
              </a>
            </div>
            <div className="col s12 loginButton">
              <a
                href="/auth/facebook"
                className="waves-effect waves-light btn-large social facebook"
              >
                <i className="fa fa-facebook left" /> Continue with Facebook
              </a>
            </div>
            <div className="col s12 loginButton">
              <a
                href="/auth/twitter"
                className="waves-effect waves-light btn-large social twitter"
              >
                <i className="fa fa-twitter left" /> Continue with Twitter
              </a>
            </div>
            <div className="col s12">
              <h5>
                <span id="loginOr">OR</span>
              </h5>
            </div>
            <div className="col s12" />
          </div>
        </div>
      </div>
    );
  }
}
