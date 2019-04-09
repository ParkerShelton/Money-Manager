import React, { Component } from 'react';
import './Footer.scss';

import home from '../../img/home.png';
import history from '../../img/history.png';
import card from '../../img/card.png';
import income from '../../img/income.png';
import expense from '../../img/expense.png';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="Footer">
        <div className="iconContainer">
          <div className="icon">
            <img alt="home" src={home}></img>
          </div>

          <div className="icon">
            <img alt="history" src={history}></img>
          </div>

          <div className="icon">
            <img alt="income" src={income}></img>
          </div>

          <div className="icon">
            <img alt="expense" src={expense}></img>
          </div>

          <div className="icon">
            <img alt="card" src={card}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
