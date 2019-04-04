import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="menuContainer">

          <div className="amountContainer">
            <h2 className="total">$5,000</h2>
            <p className="checking">C: $1,000</p>
            <p className="saving">S: $4,000</p>
          </div>

          <button onClick={(e) => {this.props.routes(e)}} name="manage" className="button">Manage</button>
          <button onClick={(e) => {this.props.routes(e)}} name="history" className="button">History</button>
        </div>
      </div>
    );
  }
}

export default Home;
