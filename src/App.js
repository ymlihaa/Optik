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

    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
    this.setAlertTrue = this.setAlertTrue.bind(this);
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

  setStorage(x) {
    console.log("app.js/setStore ile set edilen :", x);
    localStorage.setItem("startIndex", x.toString());
  }

  getStorage() {
    console.log("app.js/ getStore", localStorage.getItem("startIndex"));
    return parseInt(localStorage.getItem("startIndex"));
  }

  finishExam() {
    let result = { ...JSON.parse(localStorage.getItem("resultArr")) };
    console.log(result);
  }

  setAlertTrue() {
    this.setState({
      alert: true,
    });
  }

  render() {
    const Appwrapper = {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    const cardshadow = {
      background: " #fff",
      borderRadius: " 2px",
      boxShadow: " 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    };

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
      <div style={Appwrapper} className="mx-auto p-2">
        <h3>{this.state.lessonName[0]}</h3>

        {this.state.alert && alert}
        <div
          style={cardshadow}
          className="
          d-flex 
          justify-content-center
          align-content-center
          mx-auto
          w-100
          card 
          p-5"
        >
          <Optik
            startIndex={this.state.startIndex}
            isFinish={this.state.finish}
            getItem={this.getStorage}
            setAlertTrue={this.setAlertTrue}
          />
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
