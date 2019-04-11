import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="sliderContainer">

          <div className="totalSlide">
            <p>Total Amount</p>
            <h2 className="total"><span>$</span>{this.props.moneyTotal}</h2>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
