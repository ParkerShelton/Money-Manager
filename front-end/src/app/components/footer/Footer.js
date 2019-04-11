import React, { Component } from 'react';
import './Footer.scss';

//DEFAULT
import home from '../../img/home.png';
import history from '../../img/history.png';
import income from '../../img/income.png';
import expense from '../../img/expense.png';
import card from '../../img/card.png';


//SELECTED
import homeSelected from '../../img/homeSelected.png';
import historySelected from '../../img/historySelected.png';
import incomeSelected from '../../img/incomeSelected.png';
import expenseSelected from '../../img/expenseSelected.png';
import cardSelected from '../../img/cardSelected.png';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    let homeIcon = home;
    let historyIcon = history;
    let incomeIcon = income;
    let expenseIcon = expense;
    let cardIcon = card;
    let homeClass = "icon";
    let historyClass = "icon";
    let incomeClass = "icon";
    let expenseClass = "icon";
    let cardClass = "icon";

    switch(this.props.menuSelect) {
      case 0:
        homeIcon = homeSelected;
        historyIcon = history;
        incomeIcon = income;
        expenseIcon = expense;
        cardIcon = card;
        break;

      case 1:
        homeIcon = home;
        historyIcon = historySelected;
        incomeIcon = income;
        expenseIcon = expense;
        cardIcon = card;
        break;

      case 2:
        homeIcon = home;
        historyIcon = history;
        incomeIcon = incomeSelected;
        expenseIcon = expense;
        cardIcon = card;
        break;

      case 3:
        homeIcon = home;
        historyIcon = history;
        incomeIcon = income;
        expenseIcon = expenseSelected;
        cardIcon = card;
        break;

      case 4:
        homeIcon = home;
        historyIcon = history;
        incomeIcon = income;
        expenseIcon = expense;
        cardIcon = cardSelected;
        break;

      default:
        homeIcon = homeSelected;
        historyIcon = history;
        incomeIcon = income;
        expenseIcon = expense;
        cardIcon = card;
        break;
    }

    switch(this.props.menuSelect) {
      case 0:
        homeClass = "iconSelected";
        historyClass = "icon";
        incomeClass = "icon";
        expenseClass = "icon";
        cardClass = "icon";
        break;

      case 1:
        homeClass = "icon";
        historyClass = "iconSelected";
        incomeClass = "icon";
        expenseClass = "icon";
        cardClass = "icon";
        break;

      case 2:
        homeClass = "icon";
        historyClass = "icon";
        incomeClass = "iconSelected";
        expenseClass = "icon";
        cardClass = "icon";
        break;

      case 3:
        homeClass = "icon";
        historyClass = "icon";
        incomeClass = "icon";
        expenseClass = "iconSelected";
        cardClass = "icon";
        break;

      case 4:
        homeClass = "icon";
        historyClass = "icon";
        incomeClass = "icon";
        expenseClass = "icon";
        cardClass = "iconSelected";
        break;

      default:
        homeClass = "iconSelected";
        historyClass = "icon";
        incomeClass = "icon";
        expenseClass = "icon";
        cardClass = "icon";
        break;
    }

    return (
      <div className="Footer">
        <div className="iconContainer">

          <div onClick={() => this.props.buttonClicked("home")} className={homeClass}>
            <img alt="home" src={homeIcon}></img>
          </div>

          <div onClick={() => this.props.buttonClicked("history")} className={historyClass}>
            <img alt="history" src={historyIcon}></img>
          </div>

          <div onClick={() => this.props.buttonClicked("income")} className={incomeClass}>
            <img alt="income" src={incomeIcon}></img>
          </div>

          <div onClick={() => this.props.buttonClicked("expense")} className={expenseClass}>
            <img alt="expense" src={expenseIcon}></img>
          </div>

          <div onClick={() => this.props.buttonClicked("card")} className={cardClass}>
            <img alt="card" src={cardIcon}></img>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
