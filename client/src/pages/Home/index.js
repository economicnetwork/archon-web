import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header.js';
import Exchange from '../../components/simpleData/exchangeData.js';
import Orders from '../../components/simpleData/ordersData.js';
import Balances from '../../components/simpleData/balancesData.js';
import Tx from '../../components/simpleData/txData.js';
import Volume from '../../components/simpleData/volumeData.js';

import Grid from '@material-ui/core/Grid';


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

        <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(16)}>

          <Grid item>
            <Orders />
          </Grid>

          <Grid item>
            <Balances />
          </Grid>

          <Grid item>
            <Volume />            
          </Grid>

          <Grid item>
            <Tx />
          </Grid>

          {/* <Exchange /> */}

          </Grid>
        </Grid>        
      </Grid>
          
          
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
