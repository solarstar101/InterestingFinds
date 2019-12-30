import React, { Component } from "react";

export default class News extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  render() {
    return (
      <React.Fragment>
        <h1> news</h1>
      </React.Fragment>
    );
  }
}
