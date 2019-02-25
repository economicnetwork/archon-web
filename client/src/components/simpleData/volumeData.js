import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getInitialVolumeData } from '../../actions/initial.js';
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


class VolumeComponent extends Component {
  state = {
    tx: []
  }

  componentWillMount() {
    this.props.getInitialVolumeData()
    .then(response => {
      let tx = [];
      //alert(response);
      for (var key in response) {
        //alert(key);
        var val = response[key];
        var sym = "xx";
        //tx.push([sym , response[i].type, response[i].filledBaseTokenAmount])
        tx.push([key,val]);
        
      }
      this.setState({ tx: tx })
      console.log("Success!");
      console.log("tx " + tx);
    })
    .catch(error => {
      console.log("Failed");
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <span className={classes.title}> Dollar Volume per day </span>
        <SimpleTable data={this.state.tx} headers={["date", "volume"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialVolumeData: () => {
      return dispatch(getInitialVolumeData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VolumeComponent));
