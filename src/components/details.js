import React from 'react';
const axios = require('axios');

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: '',
      currency: 'USD',
    };

    this.getCurrentPrice = this.getCurrentPrice.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidMount() {
    this.getCurrentPrice();
  }

  getCurrentPrice() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        // console.log('res.data.bpi: ', res.data.bpi.USD.rate);
        let roundedPrice = Math.round(
          parseFloat(res.data.bpi.USD.rate.replace(/,/g, ''))
        );
        // console.log('roundedPrice: ', roundedPrice);
        let priceFormatted = roundedPrice.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'symbol',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        // console.log('priceFormatted: ', priceFormatted);
        this.setState({
          currentPrice: priceFormatted,
        });
      })
      .catch((err) => {
        console.log('err in getCurrentPrice: ', err);
      });
  }

  updatePrice() {
    // console.log('updatePrice ran!');
    this.getCurrentPrice();
  }

  render() {
    return (
      <div className="details">
        <dl>
          <dt>Current Price</dt>
          <dd>{this.state.currentPrice}</dd>
        </dl>
        <dl>
          <dt>Currency</dt>
          <dd id="currency-label">{this.state.currency}</dd>
        </dl>
        <dl>
          <input
            type="submit"
            value="Refresh"
            className="refresh-button"
            onClick={this.updatePrice}
          ></input>
        </dl>
      </div>
    );
  }
}

export default Details;
