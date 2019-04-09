import React, { Component } from 'react';
import './GiftCard.scss';

class GiftCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList:[
        {
          name: "test",
          price: 15
        }
      ]
    }
  }


  getCards() {
    
  }



  render() {

    return (
      <div className="GiftCard">
        <table>

        </table>
      </div>
    );
  }
}

export default GiftCard;
