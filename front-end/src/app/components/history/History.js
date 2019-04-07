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

      if((historyItem.id).charAt(0) === "i") {
        itemClass = "incomeItem";

      } else if((historyItem.id).charAt(0) === "e") {
        itemClass = "expenseItem";
      }

      return (
        <tr className={itemClass} key={index}>
          <td>{historyItem.id}</td>
          <td>{historyItem.date}</td>
          <td>{historyItem.dateCreated}</td>
          <td>{historyItem.category}</td>
          <td>{historyItem.name}</td>
          <td>{historyItem.amount}</td>
        </tr>
      );
    });

    return (
      <div className="History">
        <div className="sortContainer">

        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Date Entered</th>
              <th>Category</th>
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
