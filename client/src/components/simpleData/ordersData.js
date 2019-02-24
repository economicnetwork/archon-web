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

class OrdersComponent extends Component {
  state = {
    orders: []
  }

  componentWillMount() {
    this.props.getInitialOrdersData()
    .then(response => {
      let orders = [];
      for (let i=0; i<response.orders.length; i++) {
        orders.push([response.orders[i].type, response.orders[i].price])
      }
      this.setState({ orders: orders })
      console.log("Success!");
    })
    .catch(error => {
      console.log("Failed");
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <span className={classes.title}> Orders </span>
        <SimpleTable data={this.state.orders} headers={["type", "price"]} />
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
