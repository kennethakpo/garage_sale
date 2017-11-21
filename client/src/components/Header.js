import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="cyan darken-3">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              Sellr
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/garagesales">Garage Sale</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
