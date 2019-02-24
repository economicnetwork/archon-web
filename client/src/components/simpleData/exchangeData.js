import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getCryptoCurrencyData } from '../../actions/initial.js';
import SimpleTable from '../SimpleTable.js';

const styles = {
  exchangeData: {
    textAlign: "left"
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
    paddingLeft: 10
  }
};

class ExchangeDataDispayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentWillMount() {
    this.props.getCryptoCurrencyData()
    .then(response => {
      let cryptos = [];
      Object.keys(response).map((key) => (
        cryptos.push([key, "$"+response[key].USD])
      ));
      this.setState({ cryptos: cryptos });
      console.log("Success!");
    })
    .catch(error => {
      console.log("Failed!");
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.exchangeData}>
        <span className={classes.title}> CryptoCurrency </span>
        <SimpleTable data={this.state.cryptos} headers={["Name", "USD"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCryptoCurrencyData: () => {
      return dispatch(getCryptoCurrencyData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExchangeDataDispayContainer));
