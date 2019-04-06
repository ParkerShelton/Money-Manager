import React, { Component } from 'react';
import './Manage.scss';
import Income from '../income/Income';
import Expense from '../expense/Expense';

class Manage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabSelect: 0
    }

    this.renderTabs = this.renderTabs.bind(this);
    this.tabSelect = this.tabSelect.bind(this);
  }

  tabSelect(e) {
    switch(e.target.name) {
      case "income":
        this.setState({tabSelect: 0});
        break;

      case "expense":
        this.setState({tabSelect: 1});
        break;

      case "giftCard":
        this.setState({tabSelect: 2});
        break;

      default:
        this.setState({tabSelect: 0});
        break;
    }
  }

  renderTabs() {
    switch(this.state.tabSelect) {
      case 0:
        return <Income submitIncome={this.props.submitIncome} handleChange={this.props.handleChange} removeIncome={this.props.removeIncome} addIncome={this.props.addIncome} incomeList={this.props.incomeList}/>

      case 1:
        return <Expense submitExpense={this.props.submitExpense} handleChange={this.props.handleChange} removeExpense={this.props.removeExpense} addExpense={this.props.addExpense} expenseList={this.props.expenseList}/>

      case 2:
        // return <GiftCard />
        break;

      default:
        return <Income submitIncome={this.props.submitIncome} handleChange={this.props.handleChange} removeIncome={this.props.removeIncome} addIncome={this.props.addIncome} incomeList={this.props.incomeList}/>
    }
  }

  render() {
    return (
      <div className="Manage">
        <div className="manageContainer">
          <ul className="tabContainer">
            <li><button onClick={(e) => {this.tabSelect(e)}} name="income" className="manageTab">Income</button></li>
            <li><button onClick={(e) => {this.tabSelect(e)}} name="expense" className="manageTab">Expense</button></li>
            <li><button onClick={(e) => {this.tabSelect(e)}} name="giftCard" className="manageTab">Gift Cards</button></li>
          </ul>

          {this.renderTabs()}
        </div>
      </div>
    );
  }
}

export default Manage;
