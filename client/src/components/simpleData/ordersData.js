import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getInitialOrdersData } from '../../actions/initial.js';
import SimpleTable from '../SimpleTable.js';

const styles = {
  container: {
    marginTop: 20,
    textAlign: "left"
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
    paddingLeft: 10
  }
};


function mapSymbol(baseTokenAddress){
  //maybe pull from etherscan or some other place instead
  var tokens = {
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":"USDC",       
    "0x1985365e9f78359a9b6ad760e32412f4a445e862":"REP",
    "0x0d8775f648430679a709e98d2b0cb6250d2887ef":"BAT",
    "0x0f5d2fb29fb7d3cfee444a200298f468908cc942":"MANA",
    "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0":"LOOM",
    "0x0abdace70d3790235af448c88547603b945604ea":"DNT",
    "0x41e5560054824ea6b0732e656e3ad64e20e94e45":"CVC"}
    var sym =  tokens[baseTokenAddress];
    //console.log(baseTokenAddress + " " + sym);
    return sym;
}

class OrdersComponent extends Component {
  state = {
    orders: []
  }

  componentWillMount() {
    this.props.getInitialOrdersData()
    .then(response => {
      let orders = [];
      for (let i=0; i<response.length; i++) {
        var sym = mapSymbol(response[i].baseTokenAddress);
        var p = parseFloat(response[i].price).toFixed(8);
        orders.push([sym, response[i].type, p ])
        
      }
      this.setState({ orders: orders })
      console.log("Success!");
      console.log("orders " + orders);
    })
    .catch(error => {
      console.log("Failed");
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <span className={classes.title}>Open Orders </span>
        <SimpleTable data={this.state.orders} headers={["symbol", "type", "price"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialOrdersData: () => {
      return dispatch(getInitialOrdersData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrdersComponent));
