import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default class GarageSaleCarousel extends Component {
  render() {
    const garageSaleImages = this.props.garageSale.images;

    if (garageSaleImages !== undefined && garageSaleImages.length > 0) {
      return (
        <Carousel useKeyboardArrows={true} autoPlay={true}>
          {garageSaleImages.map(image => {
            return (
              <div key={this.props.garageSale._id}>
                <img
                  src={
                    "https://s3.us-east-2.amazonaws.com/akpo-garagesale/" +
                    image
                  }
                  alt="garage Sale"
                />
              </div>
            );
          })}
        </Carousel>
      );
    } else {
      return <div>No Images Provided</div>;
    }
  }
}
