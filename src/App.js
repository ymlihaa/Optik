import React, { Component } from "react";
import Header from "./components/Header";
import Optik from "./components/Optik";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finish: false,
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
    let item = this.getStorage();

    console.log("App comonentinDidmountdaki local storage değeri : ", item);

    this.setState({
      startIndex: item,
    });

    if (item == null) {
      this.setStorage(0);
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.startIndex !== this.state.startIndex) {
      this.setStorage(this.state.startIndex);
    }
  }

  nextPage() {
    if (this.state.startIndex > 20) {
      this.setState({
        alert: true,
        finish: true,
      });
      return;
    }
    this.setState((prevState) => {
      return {
        startIndex: parseInt(prevState.startIndex) + 10,
      };
    });
    window.location.href = "http://localhost:8000/";
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
        startIndex: parseInt(prevState.startIndex) - 10,
      };
    });
    window.location.href = "http://localhost:8000/";
  }

  setStorage(x) {
    console.log("app.js/setStore ile set edilen :", x);
    localStorage.setItem("startIndex", x.toString());
  }

  getStorage() {
    console.log("app.js/ getStore", localStorage.getItem("startIndex"));
    return parseInt(localStorage.getItem("startIndex"));
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
      <div className="w-100 d-flex  flex-column  align-content-center justify-content-center">
        <h3>{this.state.lessonName[0]}</h3>

        {this.state.alert && alert}

        <Optik
          startIndex={this.state.startIndex}
          isFinish={this.state.finish}
          getItem={this.getStorage}
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
/**TODO:
 *
 * LOCAL STORAGE PROBLEMİNİ ÇÖZ
 *
 */
