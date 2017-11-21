import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2>Landing</h2>
        <h3>
          This page will cycle through a fixed set of pictures in the background
          have huge buttons for the user to login, signup or view all garage
          sales around thier location
          <div>
            <a href="/garagesales">View All Garage Sales around you</a>
          </div>
        </h3>
      </div>
    );
  }
}
