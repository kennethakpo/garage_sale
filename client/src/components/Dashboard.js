import React, { Component } from "react";
import DashboardCard from "./DashboardCard";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { garageSales: [] };
  }

  async componentDidMount() {
    const result = await fetch("http://localhost:5000/api/garagesales");
    const garageSales = await result.json();

    this.setState({ garageSales: garageSales });
  }

  render() {
    return (
      <div className="container">
        {<DashboardCard garageSales={this.state.garageSales} />}
      </div>
    );
  }
}
