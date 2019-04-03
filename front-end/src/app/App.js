import React, { Component } from 'react';
import './reset.scss'
import './App.scss';
import Home from './components/home/Home';
import Manage from './components/manage/Manage';
import History from './components/history/History';

import {FetchIncome, AddIncome} from '../app/api/api.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuSelect: 1,

      incomeList: [],

      storedIncome: []
    }

    this.addIncome = this.addIncome.bind(this);
    this.removeIncome = this.removeIncome.bind(this);
    this.generateId = this.generateId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitIncome = this.submitIncome.bind(this);
  }


  componentWillMount() {
    FetchIncome().then((res) => {

      this.setState({
        storedIncome: res
      });
    });

    this.addIncome();
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  handleChange(event, index) {
    let incomeList = this.state.incomeList;

    if(event.target.name === "incomeCategory") {
      incomeList[index].category = event.target.value;

    } else if(event.target.name === "incomeInput") {
      incomeList[index].name = event.target.value;

    } else if(event.target.name === "priceInput") {
      incomeList[index].amount = event.target.value;

    } else if(event.target.name === "dateInput") {
      incomeList[index].date = event.target.value;
    }

    this.setState(
      incomeList
    );
  }

  addIncome(e) {
    if(e != null) {
      e.preventDefault();
    }

    let id = this.generateId();
    let dateCreated = new Date();

    let incomeItem = {
      id: id,
      date: "",
      dateCreated: dateCreated,
      category: "",
      name: "",
      amount: 0
    }

    this.setState({incomeList: [...this.state.incomeList, incomeItem]});
  }

  removeIncome(e, incomeItem) {
    e.preventDefault();

    for(let i = 0; i < (this.state.incomeList.length); i++) {
      var newIncomeList = this.state.incomeList.filter(income => income.id !== incomeItem.id);
    }

    this.setState({incomeList: newIncomeList});
  }


///////////////////////////////////////////
//               API CALLS               //
///////////////////////////////////////////

  submitIncome(e) {
    e.preventDefault();
    AddIncome(this.state.incomeList);
  }

  RenderPage() {
    switch(this.state.menuSelect) {
      case 0:
        return <Home />;

      case 1:
        return <Manage submitIncome={this.submitIncome} handleChange={this.handleChange} removeIncome={this.removeIncome} addIncome={this.addIncome} incomeList={this.state.incomeList}/>;

      case 2:
        return <History storedIncome={this.state.storedIncome}/>;

      default:
        return <Home />;
    }
  }


  render() {

    return (
      <div className="App">
        <div className="pageContainer">
          <h1 className="title">Money Manager</h1>

          {this.RenderPage()}
        </div>
      </div>
    );
  }
}

export default App;
