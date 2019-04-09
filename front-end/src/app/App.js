import React, { Component } from 'react';
import './reset.scss'
import './App.scss';
import Home from './components/home/Home';
import Manage from './components/manage/Manage';
import History from './components/history/History';
import Footer from './components/footer/Footer';

import {SubmitIncome, SubmitExpenses, FetchHistory} from '../app/api/api.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuSelect: 0,
      moneyTotal: 0,

      incomeList: [],
      expenseList: [],

      storedIncome: [],
      storedExpense: [],
      storedHistory: []
    }

    this.addIncome = this.addIncome.bind(this);
    this.addExpense = this.addExpense.bind(this);

    this.removeIncome = this.removeIncome.bind(this);
    this.removeExpense = this.removeExpense.bind(this);

    this.submitIncome = this.submitIncome.bind(this);
    this.submitExpense = this.submitExpense.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.generateId = this.generateId.bind(this);
    this.routes = this.routes.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    FetchHistory().then((res) => {
      for(let i = 0; i < res.length; i++) {
        if((res[i].id).charAt(0) === "i") {
          total = total + res[i].amount;

        } else if((res[i].id).charAt(0) === "e") {
          total = total - res[i].amount;
        }
      }


      if(total !== this.state.moneyTotal) {
        this.setState({moneyTotal: total});
      }
    })
  }

  routes(e) {
    if(e.target.name === "manage") {
      if(this.state.incomeList.length === 0) {
        this.addIncome();
        this.addExpense();
      }
      this.setState({menuSelect: 1});

    } else if(e.target.name === "history") {
      FetchHistory().then((res) => {
        this.setState({
          storedHistory: res
        });
      });

      this.setState({menuSelect: 2});

    } else if(e.target.name === "back") {
      this.calculateTotal();
      this.setState({menuSelect: 0});
    }
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  handleChange(event, index) {
    let incomeList = this.state.incomeList;
    let expenseList = this.state.expenseList;

    switch(event.target.name) {
      //INCOME
      case "incomeCategory":
        incomeList[index].category = event.target.value;
        break;

      case "incomeInput":
        incomeList[index].name = event.target.value;
        break;

      case "incomeAmount":
        incomeList[index].amount = event.target.value;
        break;

      case "incomeDate":
        incomeList[index].date = event.target.value;
        break;

      //EXPENSE
      case "expenseCategory":
        expenseList[index].category = event.target.value;
        break;

      case "expenseInput":
        expenseList[index].name = event.target.value;
        break;

      case "expenseAmount":
        expenseList[index].amount = event.target.value;
        break;

      case "expenseDate":
        expenseList[index].date = event.target.value;
        break;

      default:
        break;
    }


    this.setState({
      incomeList: incomeList,
      expenseList: expenseList
    }
    );
  }


/////////////////////////////////
//           INCOME            //
/////////////////////////////////
  addIncome(e) {
    if(e != null) {
      e.preventDefault();
    }

    let id = "i" + this.generateId();

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getDate();
    let day = d.getDate();

    let dateCreated = `${year}-${month}-${day}`;
    console.log(dateCreated);

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


/////////////////////////////////
//           EXPENSE           //
/////////////////////////////////
  addExpense(e) {
    if(e != null) {
      e.preventDefault();
    }

    let id = "e" + this.generateId();

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getDate();
    let day = d.getDate();

    let dateCreated = `${year}-${month}-${day}`;

    let expenseItem = {
      id: id,
      date: "",
      dateCreated: dateCreated,
      category: "check/DD",
      name: "",
      amount: 0
    }

    this.setState({expenseList: [...this.state.expenseList, expenseItem]});
  }

  removeExpense(e, expenseItem) {
    e.preventDefault();

    for(let i = 0; i < (this.state.expenseList.length); i++) {
      var newExpenseList = this.state.expenseList.filter(expense => expense.id !== expenseItem.id);
    }

    this.setState({expenseList: newExpenseList});
  }


///////////////////////////////////////////
//               API CALLS               //
///////////////////////////////////////////

  submitIncome() {
    SubmitIncome(this.state.incomeList);
  }

  submitExpense() {
    SubmitExpenses(this.state.expenseList);
  }
///////////////////////////////////////////
//                                       //
///////////////////////////////////////////


  RenderPage() {
    switch(this.state.menuSelect) {
      case 0:
        return <Home calculateTotal={this.calculateTotal} moneyTotal={this.state.moneyTotal} routes={this.routes} />;

      case 1:
        return <Manage submitIncome={this.submitIncome}
                       submitExpense={this.submitExpense}
                       removeIncome={this.removeIncome}
                       removeExpense={this.removeExpense}
                       addIncome={this.addIncome}
                       addExpense={this.addExpense}
                       handleChange={this.handleChange}
                       incomeList={this.state.incomeList}
                       expenseList={this.state.expenseList}/>;

      case 2:
        return <History storedHistory={this.state.storedHistory}/>;

      default:
        return <Home moneyTotal={this.state.moneyTotal} routes={this.routes} />;
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

          {/* <h1 className="title">Money Manager</h1> */}
          {this.RenderPage()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
