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
        console.log('priceFormatted: ', priceFormatted);
        this.setState({
          currentPrice: priceFormatted,
        });
      })
      .catch((err) => {
        console.log('err in getCurrentPrice: ', err);
      });
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
          <dd>{this.state.currency}</dd>
        </dl>
      </div>
    );
  }
}

export default Details;
