import React, { Component } from 'react';
import './reset.scss'
import './App.scss';
import Home from './components/home/Home';
import Manage from './components/manage/Manage';
import History from './components/history/History';

import {FetchIncome, SubmitIncome} from '../app/api/api.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuSelect: 0,

      incomeList: [],

      storedIncome: []
    }

    this.addIncome = this.addIncome.bind(this);
    this.removeIncome = this.removeIncome.bind(this);
    this.generateId = this.generateId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitIncome = this.submitIncome.bind(this);
    this.routes = this.routes.bind(this);
  }


  // componentWillMount() {
  //   if(this.state.menuSelect === 2) {
  //     FetchIncome().then((res) => {
  //       this.setState({
  //         storedIncome: res
  //       });
  //     });
  //   } else if(this.state.menuSelect === 1) {
  //     this.addIncome();

  //   }
  // }

  routes(e) {
    if(e.target.name === "manage") {
      if(this.state.incomeList.length === 0) {
        this.addIncome();
      }
      this.setState({menuSelect: 1});

    } else if(e.target.name === "history") {
      FetchIncome().then((res) => {
        this.setState({
          storedIncome: res
        });
      });

      this.setState({menuSelect: 2});

    } else if(e.target.name === "back") {
      this.setState({menuSelect: 0});
    }
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

    } else if(event.target.name === "amountInput") {
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

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getDate();
    let day = d.getDay();

    let dateCreated = `${year}-${month}-${day}`;

    let incomeItem = {
      id: id,
      date: "",
      dateCreated: dateCreated,
      category: "check/DD",
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

  submitIncome() {
    SubmitIncome(this.state.incomeList);
  }

///////////////////////////////////////////
//                                       //
///////////////////////////////////////////


  RenderPage() {
    switch(this.state.menuSelect) {
      case 0:
        return <Home routes={this.routes} />;

      case 1:
        return <Manage submitIncome={this.submitIncome} handleChange={this.handleChange} removeIncome={this.removeIncome} addIncome={this.addIncome} incomeList={this.state.incomeList}/>;

      case 2:
        return <History storedIncome={this.state.storedIncome}/>;

      default:
        return <Home routes={this.routes} />;
    }
  }


  render() {

    let buttonClass = "";

    if(this.state.menuSelect === 0) {
      buttonClass = "backButtonHidden";
    } else {
      buttonClass = "backButton";
    }

    return (
      <div className="App">
        <div className="pageContainer">
          <div className="buttonContainer">
            <button onClick={(e) => {this.routes(e)}} name="back" className={buttonClass}>Back</button>
          </div>

          <h1 className="title">Money Manager</h1>

          {this.RenderPage()}
        </div>
      </div>
    );
  }
}

export default App;
