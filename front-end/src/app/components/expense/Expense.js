import React, { Component } from 'react';
import './Expense.scss';

class Expense extends Component {


  render() {

    let expenseList = this.props.expenseList.map((expenseItem, index) => {
      return(
        <li className="expenseContainer" key={index}>
          <label>
            <select onChange={(e) => {this.props.handleChange(e, index)}} name="expenseCategory" className="expenseCategory">
              <option value="house">House</option>
              <option value="grocery">Grocery</option>
              <option value="car">Car</option>
              <option value="medical">Medical</option>
              <option value="apparel">Apparel</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <input onChange={(e) => {this.props.handleChange(e, index)}} name="expenseInput" className="expenseInput" placeholder="Enter Name" type="text" value={expenseItem.name} />
          </label>

          <label>
            $
            <input onChange={(e) => {this.props.handleChange(e, index)}} name="expenseAmount" className="amountInput" placeholder="Enter Amount" type="text" value={expenseItem.amount} />
          </label>

          <label>
            <input onChange={(e) => {this.props.handleChange(e, index)}} type="date" name="expenseDate" className="dateInput" value={expenseItem.date}/>
          </label>

          <button className="expenseRemove" onClick={(e) => {this.props.removeExpense(e,expenseItem)}} >X</button>
        </li>
      );
    });

    return (
      <div className="Expense">
        <form className="expenseForm">
          <div className="expenseTitle">
            <button onClick={(e) => this.props.addExpense(e)}>Add Expense</button>

            <button onClick={() => this.props.submitExpense()}>Submit</button>
          </div>

          <div className="expenseListContainer">
            <ul className="expenseList">
              {expenseList}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default Expense;
