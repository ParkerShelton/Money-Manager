import React, { Component } from 'react';
import './Income.scss';

class Income extends Component {


  render() {

    let incomeList = this.props.incomeList.map((incomeItem, index) => {
      return(
        <li className="incomeItem" key={index}>
          <div className="leftHalf">
            <label>
              <select onChange={(e) => {this.props.handleChange(e, index)}} name="incomeCategory" className="incomeCategory">
                <option value="check">Check/DD</option>
                <option value="cash">Cash</option>
                {/* <option value="giftCard">Gift Card</option> */}
                <option value="returnedItem">Returned Item</option>
                <option value="soldItem">Sold Item</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              <input onChange={(e) => {this.props.handleChange(e, index)}} name="incomeInput" className="incomeInput" placeholder="Enter Name" type="text" value={incomeItem.name} />
            </label>
          </div>

          <div className="rightHalf">
            <label>
              $
              <input onChange={(e) => {this.props.handleChange(e, index)}} name="incomeAmount" className="amountInput" placeholder="Enter Amount" type="text" value={incomeItem.amount} />
            </label>

            <label>
              <input onChange={(e) => {this.props.handleChange(e, index)}} type="date" name="incomeDate" className="dateInput" value={incomeItem.date}/>
            </label>
          </div>


          <button className="incomeRemove" onClick={(e) => {this.props.removeIncome(e,incomeItem)}} >X</button>
        </li>
      );
    });

    return (
      <div className="Income">
        <form className="incomeForm">
          <div className="incomeTitle">
            <button onClick={(e) => this.props.addIncome(e)}>Add Income</button>

            <button onClick={() => this.props.submitIncome()}>Submit</button>
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
