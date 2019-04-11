import React, { Component } from 'react';
import './History.scss';

class History extends Component {


  render() {

    let storedHistorySorted = this.props.storedHistory.sort((a,b) => {
      if(a.date > b.date) return -1;
      if(a.date < b.date) return 1;
      return 0;
    }).map((historyItem, index) => {
      let itemClass = "";
      let itemSymbol = "";

      if((historyItem.id).charAt(0) === "i") {
        itemClass = "incomeItem";
        itemSymbol = "+";

      } else if((historyItem.id).charAt(0) === "e") {
        itemClass = "expenseItem";
        itemSymbol = "-";
      }

      return (
        <tr className={itemClass} key={index}>
          <td><span>{historyItem.date}</span></td>
          <td><span>{historyItem.name}</span></td>
          <td><span>  <span className="symbol">{itemSymbol}</span>  ${historyItem.amount}</span></td>
        </tr>
      );
    });

    return (
      <div className="History">

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {storedHistorySorted}
          </tbody>
        </table>
      </div>
    );
  }
}

export default History;
