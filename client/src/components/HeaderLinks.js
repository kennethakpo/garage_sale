import React, { Component } from "react";

export default class HeaderLinks extends Component {
  render() {
    const currentUser = this.props.currentUser;
    if (currentUser === undefined) {
      return [
        <li key="link1">
          <a href="/login">Login</a>
        </li>
      ];
    } else {
      return [
        <li key="link1">
          <a href="/profile">{currentUser.username}</a>
        </li>,
        <li key="link2">
          <a href="/garagesales/new">New Sale</a>
        </li>,
        <li key="link3">
          <a href="/api/logout">Logout</a>
        </li>
      ];
    }
  }
}
