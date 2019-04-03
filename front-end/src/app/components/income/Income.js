import React, { Component } from 'react';
import './Income.scss';

class Income extends Component {


  render() {

    let incomeList = this.props.incomeList.map((incomeItem, index) => {
      return(
        <li className="incomeContainer" key={index}>
          <label>
            <select onChange={(e) => {this.props.handleChange(e, index)}} name="incomeCategory" className="incomeCategory">
              <option value="check">Check/DD</option>
              <option value="cash">Cash</option>
              <option value="giftCard">Gift Card</option>
              <option value="returnedItem">Returned Item</option>
              <option value="soldItem">Sold Item</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <input onChange={(e) => {this.props.handleChange(e, index)}} name="incomeInput" className="incomeInput" placeholder="Enter Name" type="text" value={incomeItem.name} />
          </label>

          <label>
            $
            <input onChange={(e) => {this.props.handleChange(e, index)}} name="priceInput" className="priceInput" placeholder="Enter Price" type="text" value={incomeItem.amount} />
          </label>

          <label>
            <input type="date" name="dateInput" className="dateInput" value={incomeItem.date}/>
          </label>

          <button className="incomeRemove" onClick={(e) => {this.props.removeIncome(e,incomeItem)}} >X</button>
        </li>
      );
    });

    return (
      <div className="Income">
        <form className="incomeForm">
          <div className="incomeTitle">
            <button onClick={(e) => this.props.addIncome(e)}>Add Income</button>

            <button onClick={(e) => this.props.submitIncome(e)}>Submit</button>
          </div>

          <div className="incomeListContainer">
            <ul className="incomeList">
              {incomeList}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default Income;
