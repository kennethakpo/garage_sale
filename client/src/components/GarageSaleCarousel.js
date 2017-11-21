import React, { Component } from "react";
import $ from "jquery";

export default class GarageSaleCarousel extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".carousel").carousel();
    });
    $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true
    });
  }

  render() {
    const garageSaleImages = this.props.garageSale.images;

    if (
      typeof garageSaleImages !== "undefined" &&
      garageSaleImages.length > 0
    ) {
      return (
        <div className="carousel carousel-slider">
          {garageSaleImages.map(image => {
            return (
              <a
                className="carousel-item"
                href=""
                key={this.props.garageSale._id}
              >
                <img
                  src={
                    "https://s3.us-east-2.amazonaws.com/akpo-garagesale/" +
                    image
                  }
                  alt="garage Sale"
                />
              </a>
            );
          })}
        </div>
      );
    } else {
      return <div>No Images Provided</div>;
    }
  }
}
