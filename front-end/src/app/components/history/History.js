import React, { Component } from 'react';
import './History.scss';

class History extends Component {


  render() {

    let storedIncome = this.props.storedIncome.map((incomeItem, index) => {

      return (
        <tr key={index}>
          <td>{incomeItem.id}</td>
          <td>{incomeItem.date}</td>
          <td>{incomeItem.dateCreated}</td>
          <td>{incomeItem.category}</td>
          <td>{incomeItem.name}</td>
          <td>{incomeItem.price}</td>
        </tr>
      );
    });

    return (
      <div className="History">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Date Entered</th>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {storedIncome}
          </tbody>
        </table>
      </div>
    );
  }
}

export default History;
