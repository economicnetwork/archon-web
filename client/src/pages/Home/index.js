import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header.js';
import Exchange from '../../components/simpleData/exchangeData.js';
import Orders from '../../components/simpleData/ordersData.js';
import Balances from '../../components/simpleData/balancesData.js';

const styles = {
  body: {
    padding: 50
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.body}>
          <Exchange />
          <Orders />
          <Balances />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
