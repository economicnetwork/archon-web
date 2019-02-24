import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getInitialBalancesData } from '../../actions/initial.js';
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

class BalancesComponent extends Component {
  state = {
    balances: []
  }

  componentWillMount() {
    this.props.getInitialBalancesData()
    .then(response => {
      let balances = [];
      Object.keys(response).map((key) => (
        balances.push([key, response[key]])
      ));
      this.setState({ balances: balances })
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
        <span className={classes.title}> Balance </span>
        <SimpleTable data={this.state.balances} headers={["symbol", "amount"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialBalancesData: () => {
      return dispatch(getInitialBalancesData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BalancesComponent));
