import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <img
        src="/logo-white.png"
        alt="logo-Workee"
        width={`${this.props.width}px`}
      />
    );
  }
}
