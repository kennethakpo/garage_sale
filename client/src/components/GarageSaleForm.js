import React, { Component } from "react";
import $ from "jquery";

export default class GarageSaleForm extends Component {
  componentDidMount() {
    $(".datepicker").pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: "Today",
      clear: "Clear",
      close: "Ok",
      closeOnSelect: false // Close upon selecting a date,
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const garageSaleFormData = new FormData(
      document.getElementById("garageSaleForm")
    );

    if (document.getElementById("imagesToUpload").files.length > 5) {
      return alert("Too many files");
    }

    const fetchInit = {
      method: "POST",
      mode: "cors",
      body: garageSaleFormData
    };

    fetch("http://localhost:5000/api/garagesales", fetchInit).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row garageSaleForm">
          <form
            onSubmit={this.onSubmit}
            id="garageSaleForm"
            encType="multipart/form-data"
            className="col s12"
          >
            <div className="row">
              <div className="input-field col s12">
                <input className="" type="text" name="location" id="location" />
                <label htmlFor="location">Location</label>
              </div>
              <div className="input-field col s12 col m6">
                <label htmlFor="startDate">Start Date</label>
                <input className="datepicker" type="date" name="startDate" />
              </div>
              <div className="input-field col s12 col m6">
                <label htmlFor="endDate">End Date</label>
                <input className="datepicker" type="date" name="endDate" />
              </div>
              <div className="file-field input-field col s12">
                <div className="btn cyan darken-3">
                  <span>
                    <i className="small material-icons left">
                      add_a_photo
                    </i>{" "}
                    Upload Pictures
                  </span>
                  <input
                    id="imagesToUpload"
                    className=""
                    type="file"
                    name="garageSalePhotos"
                    multiple
                    accept="image/png,image/jpeg"
                  />
                </div>
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload at most 5 pictures of your items"
                  />
                </div>
              </div>
              <div className="input-field col s12">
                <label htmlFor="description">Brief description</label>
                <input className="" type="text" name="description" />
              </div>
              <div className="input-field col s12">
                <button
                  type="Submit"
                  className="waves-effect waves-light btn cyan darken-3"
                >
                  <i className="small material-icons left">add</i>
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
