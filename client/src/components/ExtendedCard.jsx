import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style/ExtendedCard.css";

class ExtendedCard extends Component {
  render() {
    const phone = this.props.phone;
    if (!phone) return <h1>LOADING</h1>;
    return (
      <div className="container">
        <div className="info element">
          <h2>
            {phone.name}
          </h2>
          <img src={`../images/${phone.imageFileName}`} alt="phone pic" />
        </div>
        <div className="element">
          <div className="table">
            <table>
              <tr>
                <td>Made by</td>
                <td className="table-definition">
                  {phone.manufacturer}
                </td>
              </tr>
              <tr>
                <td>Color</td>
                <td className="table-definition">
                  {phone.color}
                </td>
              </tr>
              <tr>
                <td>Screen</td>
                <td className="table-definition">
                  {phone.screen}
                </td>
              </tr>
              <tr>
                <td>CPU</td>
                <td className="table-definition">
                  {phone.processor}
                </td>
              </tr>
              <tr>
                <td>RAM</td>
                <td className="table-definition">
                  {phone.ram}
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td className="table-definition">
                  $ {phone.price}
                </td>
              </tr>
            </table>
          </div>
          <div className="detail">
            <p>
              {phone.description}
            </p>
          </div>
          <button><Link to="/">Back to Home</Link></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  phone: state.phonesState.phones[ownProps.match.params.id]
});

export default connect(mapStateToProps)(ExtendedCard);
