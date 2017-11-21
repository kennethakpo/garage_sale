import React, { Component } from "react";
import GarageSaleCarousel from "./GarageSaleCarousel";

export default class GarageSaleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { garageSale: {} };
  }

  async componentDidMount() {
    const garageSaleId = this.props.match.params.id;
    const result = await fetch(
      "http://localhost:5000/api/garagesales/" + garageSaleId
    );
    const garageSale = await result.json();

    this.setState({ garageSale: garageSale });
  }

  render() {
    const garageSale = this.state.garageSale;

    return (
      <div className="container">
        <div className="row">
          <div className="col l12">
            <div className="card-panel garageSaleCarousel">
              {<GarageSaleCarousel garageSale={garageSale} />}
            </div>
          </div>
        </div>
        <div className="grey lighten-2">
          {this.state.garageSale.location} <br />
          {this.state.garageSale.startDate} <br />
          {this.state.garageSale.endDate} <br />
        </div>
      </div>
    );
  }
}
