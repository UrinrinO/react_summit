import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Mauris eget lobortis turpis, et finibus ligula. Sed interdum
                scelerisque sapien, eget tempus ante aliquam non. Nunc auctor
                enim augue, ut maximus orci convallis nec.
              </p>
              <MyButton 
                text="Purchase Tickets"
                bck="#333"
                color="#fff"
                link="http://mediaprongr.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
