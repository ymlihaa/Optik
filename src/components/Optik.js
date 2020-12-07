import { SignalCellularNullRounded } from "@material-ui/icons";
import React, { Component } from "react";
import Button from "./Button";

class Optik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finish: false,
      result: [],
      limit: 0,
      htmlItems: [],
    };
    this.addClick = this.addClick.bind(this);
  }

  componentDidMount() {
    let value = this.props.getItem();
    const tempArr = { ...JSON.parse(localStorage.getItem("resultArr")) };
    console.log("OPTİK componentDidmount getlocal storage : ", value);
    if (this.props.isFinish) {
      this.setState({
        finish: true,
      });
    } else {
      this.setState({
        limit: value,
        result: tempArr,
      });
      console.log(this.state.result);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("resultArr", JSON.stringify(this.state.result));
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

    const limit = this.state.limit;
    const items = [];
    const rArr = { ...JSON.parse(localStorage.getItem("resultArr")) };
    for (let i = limit; i < limit + 10; i++)
      [
        items.push(
          <div key={i} className="w-50 d-flex  border ">
            <li
              className={" d-flex justify-content-center rounded p-3 "}
              style={style}
              key={i}
            >
              <span>{i + 1}. Soru</span>
              <Button
                id={i}
                addclick={this.addClick}
                selectRadio={rArr[i] !== "" ? rArr[i] : ""}
              />
            </li>
          </div>
        ),
      ];

    return <div>{!this.state.finish === true ? items : finishAlert}</div>;
  }
}

export default Optik;

/**TODO:
 *
 * LOCAL STORAGE PROBLEMİNİ ÇÖZ
 *
 */
