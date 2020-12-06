import React, { Component } from "react";
import Button from "./Button";

class Optik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
    this.addClick = this.addClick.bind(this);
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
    const style = {
      width: "100%",
      listStyleType: "none",
    };

    const items = [];
    for (let i = 0; i < 40; i++) {
      items.push(
        <div className="w-50 d-flex  border ">
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
    return (
      <div>
        {items}
        <div>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    );
  }
}

export default Optik;
