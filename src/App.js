import React, { Component } from "react";
import Alerts from "./components/ExamAlert";
import Header from "./components/Header";
import Optik from "./components/Optik";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      finish: false,
      lessonName: ["Türkçe", "Matematik", "Sosyal Bilgiler", "Fen Bilgileri"],
      // startIndex: 0,
      alertType: "",
    };

    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
    this.setAlertType = this.setAlertType.bind(this);
    this.count = 0;
  }

  // componentDidMount() {
  //   // if (item == null) {
  //   //   localStorage.setItem("startIndex", "0");
  //   // }
  //   // this.setState({
  //   //   startIndex: item,
  //   // });
  //   // if (item == null) {
  //   //   this.setStorage(0);
  //   // }
  // }

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
    this.setAlertType("finishAlert");
    console.log(result);
  }

  setAlertType(type) {
    console.log("setAlertType :", type);
    console.log(document.documentElement.scrollTop);

    document.documentElement.scrollTop = 0;
    this.setState({
      alertType: type.toString(),
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
    const element = <Alerts alertType={this.state.alertType} />;

    return (
      <div style={Appwrapper} className="mx-auto p-2">
        <h3>{this.state.lessonName[0]}</h3>
        {element !== null && element}
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
            setAlertType={this.setAlertType}
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
