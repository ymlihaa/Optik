import React, { Component } from "react";
import Header from "./components/Header";
import Optik from "./components/Optik";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      alert: false,
      startIndex: 0,
    };
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    console.log("click", this.state.startIndex);
    if (this.state.startIndex > 20) {
      this.setState({
        alert: true,
      });
      return;
    }
    this.setState((prevState) => {
      return {
        startIndex: prevState.startIndex + 10,
      };
    });
  }

  render() {
    return (
      <div className="w-100 d-flex  flex-column justify-content-center">
        <Optik startIndex={this.state.startIndex} />
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.nextPage}
          >
            Sonraki Sayfa
          </button>
        </div>
      </div>
    );
  }
}
