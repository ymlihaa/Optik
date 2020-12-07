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

    //  sayfayı yüklerken
    // Eğerki App componentinden gelen propsun içindeki isFinish datası true ise
    // state deki finish i true yap
    // değilse state deki limit değerini ve localStorage ' daki resulArr ı güncelle

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

  // Componentte bir değişiklik meydana geldiğinde
  // localStorage daki resultArrı update et
  componentDidUpdate() {
    localStorage.setItem("resultArr", JSON.stringify(this.state.result));
  }

  // Button componenti içerisinden aldığı index ve flag bilgileri ne göre
  // arrayin index numaralı indisine flag datasını yazar
  // Sonrasında state i günceller
  addClick(index, flag) {
    const arr = { ...this.state.result };
    arr[index] = flag;
    this.setState({
      result: arr,
    });
  }

  render() {
    // İşaretlenin her bir soruyu local storage den getiriyor
    const localResultArr = {
      ...JSON.parse(localStorage.getItem("resultArr")),
    };

    // 10 ar 10 ar oluşturduğumuz Radio buttonlarımızı içerek olan dizi yi tanımlıyoruz
    const questionList = [];

    // Sınav tamamen bitince finish alert çalışacak
    const finishAlert = (
      <div class="alert alert-success" role="alert">
        Congratilations . Your finish exam . <h3>Results:</h3>
      </div>
    );

    // questinList in stil değişkeni
    const questionListStyle = {
      width: "100%",
      listStyleType: "none",
    };

    // App componentinden gelen startIndex bilgisinden başlayıp radio buttonlarımızı
    // 10 defa oluşturacak döngümüz
    for (let i = this.state.limit; i < this.state.limit + 10; i++)
      [
        // elementimizi her iterasyonda questionList e push luyoruz

        questionList.push(
          <div key={i} className="w-50 d-flex  border ">
            <li
              className={
                " d-flex justify-content-sm-center align-self-center ounded p-3 "
              }
              style={questionListStyle}
              key={i}
            >
              <span>{i + 1}. Soru</span>
              <Button
                id={i}
                addclick={this.addClick}
                selectRadio={localResultArr[i] !== "" ? localResultArr[i] : ""}
              />
            </li>
          </div>
        ),
      ];

    return (
      // App componentinden sınav tamamen bittiğinde finish bilgisi gönderilecek
      // Eğer sınav tamamen bittiyse finishAlert i çalıştır
      // Bitmediyse radio buttonları döndür
      <div>{!this.state.finish === true ? questionList : finishAlert}</div>
    );
  }
}

export default Optik;

/**TODO:
 *
 * LOCAL STORAGE PROBLEMİNİ ÇÖZ
 *
 */
