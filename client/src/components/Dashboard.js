import React, { Component } from "react";
import DashboardCard from "./DashboardCard";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { garageSales: [], dashboardLoading: false };
  }

  async componentDidMount() {
    const result = await fetch("/api/garagesales");
    const garageSales = await result.json();

    this.setState({ garageSales: this.props.garageSales });

    if (this.props.geoLocationEnabled) {
      if (this.state.garageSales.length === 0) {
        this.setState({ dashboardLoading: true });
      } else {
        this.setState({ dashboardLoading: false });
      }
    } else {
      this.setState({ garageSales: garageSales });
    }
  }

  render() {
    if (this.state.dashboardLoading) {
      return (
        <div className="container">
          <div className="row section">
            <div className="col s12">
              <h3 className="cyan-text text-darken-3">
                {"geolocation" in navigator
                  ? "Garage Sales Around You"
                  : "Garage Sales"}
              </h3>
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>

                <div className="spinner-layer spinner-red">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>

                <div className="spinner-layer spinner-yellow">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>

                <div className="spinner-layer spinner-green">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row section">
            <div className="col s12">
              <h3 className="cyan-text text-darken-3">
                {this.state.garageSales.length > 0 &&
                this.state.garageSales[0].distance !== undefined
                  ? "Garage Sales Around You"
                  : "Garage Sales"}
              </h3>
            </div>
          </div>
          {<DashboardCard garageSales={this.state.garageSales} />}
        </div>
      );
    }
  }
}
