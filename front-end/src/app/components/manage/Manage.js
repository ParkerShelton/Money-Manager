import React, { Component } from 'react';
import './Manage.scss';
import Income from '../income/Income';

class Manage extends Component {
  render() {
    return (
      <div className="Manage">
        <div className="manageContainer">
          <Income submitIncome={this.props.submitIncome} handleChange={this.props.handleChange} removeIncome={this.props.removeIncome} addIncome={this.props.addIncome} incomeList={this.props.incomeList}/>
        </div>
      </div>
    );
  }
}

export default Manage;
