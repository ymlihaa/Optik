import React, { Component } from "react";
import Header from "./components/Header";
import Optik from "./components/Optik";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lessonName: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Fen Bilgileri"],
      alert: false,
      startIndex: 0,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
  }

  componentDidMount() {
    console.log("App comonentinDidmount");
  }

  componentDidUpdate() {
    console.log("App comonentinDid Update", this.state.startIndex);
    this.setStorage(this.state.startIndex);
  }

  nextPage() {
    if (this.state.startIndex > 20) {
      this.setState({
        finish: false,
        alert: true,
        finish: true,
      });
      return;
    }
    this.setState((prevState) => {
      return {
        startIndex: prevState.startIndex + 10,
      };
    });
  }

  prevPage() {
    console.log("click", this.state.startIndex);
    if (this.state.startIndex < 10) {
      this.setState({
        alert: true,
      });
      return;
    }
    this.setState((prevState) => {
      return {
        startIndex: prevState.startIndex - 10,
      };
    });
  }

  setStorage(x) {
    console.log("setStore ile set edilen :", x);
    localStorage.setItem("startIndex", x);
  }

  getStorage() {
    console.log("getStore", localStorage.getItem("startIndex"));
    return localStorage.getItem("startIndex");
  }

  render() {
    const alert = (
      <div className="alert alert-warning w-50" role="alert">
        Bu testi bitirdiniz .{" "}
        <a href="#" className="alert-link">
          Buradan bir sonraki derse geçebilirsiniz.
        </a>
        Başarılar...
      </div>
    );
    return (
      <div className="w-100 d-flex  flex-column justify-content-center">
        <h3>{this.state.lessonName[0]}</h3>

        {this.state.alert && alert}

        <Optik
          startIndex={this.state.startIndex}
          isFinish={this.state.finish}
        />
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary  m-1"
              onClick={this.prevPage}
            >
              Önceki Sayfa
            </button>
            <button
              type="button"
              className="btn btn-success m-1"
              onClick={this.nextPage}
            >
              Sonraki Sayfa
            </button>
          </div>
        </div>
      </div>
    );
  }
}
