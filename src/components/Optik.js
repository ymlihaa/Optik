import React, { Component } from "react";
import Button from "./Button";

class Optik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finish: false,
      result: [],
      limit: 0,
    };
    this.addClick = this.addClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidmount fırladı :", this.props.startIndex);

    this.setState({
      limit: this.props.startIndex,
    });
  }

  addClick(index, flag) {
    const arr = { ...this.state.result };
    arr[index] = flag;
    this.setState({
      result: arr,
    });
    console.log("addClick:", index, flag);
    console.log("cevap arr : ", this.state.result);
  }

  render() {
    const resultArr = [];
    const finishAlert = (
      <div class="alert alert-success" role="alert">
        Congratilations . Your finish exam . <h3>Results:</h3>
      </div>
    );

    const style = {
      width: "100%",
      listStyleType: "none",
    };
    const limit = this.props.startIndex;
    const items = [];
    console.log("props ile optiğe iletilen:", this.props.startIndex);
    console.log("limitin değerri:", this.props.startIndex);
    console.log("-------------------------------------:");
    for (let i = limit; i < limit + 10; i++) {
      items.push(
        <div key={i} className="w-50 d-flex  border ">
          <li
            className={" d-flex justify-content-center rounded p-3 "}
            style={style}
            key={i}
          >
            <span>{i + 1}. Soru</span>
            <Button id={i} addclick={this.addClick} />
          </li>
        </div>
      );
    }
    return <div>{!this.props.isFinish === true ? items : finishAlert}</div>;
  }
}

export default Optik;
