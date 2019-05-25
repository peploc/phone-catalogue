import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";

import "../style/Home.css";

class Home extends Component {
  render() {
    const phones = this.props.phones;
    if (phones.lenght === 0) return <h1>LOADING</h1>;
    return (
      <div className="cards-container">
        {phones.map(phone => {
          return (
            <div key={phone.id} className="card">
              <Link to={`/${phone.id}`}>
                <Card {...phone} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phonesState.phones
  };
};

export default connect(mapStateToProps, null)(Home);
