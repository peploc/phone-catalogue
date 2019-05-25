import React, { Component } from "react";

import "../style/Card.css";

export default class Card extends Component {
  render() {
    const phone = this.props;
    return (
      <div className="info-container">
        <div className="info-container-img">
          <img src={`../images/${phone.imageFileName}`} alt="phone pic" />
        </div>
        <div className="info-container-info">
          <h2>
            {phone.name}
          </h2>
          <h6>
            {phone.manufacturer}
          </h6>
          <p>
            $ {phone.price}
          </p>
        </div>
      </div>
    );
  }
}
