import React, { Component } from "react";
import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales interdum fringilla. Nunc mattis eget mi eget tempor. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales interdum fringilla. Nunc mattis eget mi eget tempor. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales interdum fringilla. Nunc mattis eget mi eget tempor. "
    ],
    linkto: [
      "http://mediaprongr.com",
      "http://mediaprongr.com",
      "http://mediaprongr.com"
    ],
    delay: [500,0,500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
        <Zoom dela={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Buy Now"
                bck="#ffa800"
                color="#191919"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
