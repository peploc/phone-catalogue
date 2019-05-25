import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import ExtendedCard from "./ExtendedCard";

import Services from "../services/services.js";
import { getAllPhones } from "../actions/action.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.service = new Services()
  }

  componentDidMount = () => {
      this.props.getAllPhones()
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={ExtendedCard} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phonesState.phones
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllPhones }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
