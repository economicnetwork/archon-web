import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
    balance: '',
    post: '',
    orders: '',
    responseToPost: '',
  };
  componentDidMount() {
    console.  log("mount");
    /*this.callApiBalance()
      .then(res => this.setState({ balance: res }))
      .catch(err => console.log(err));*/

    this.callApiOrders()
    .then(res => this.setState({ orders: res }))
    .catch(err => console.log(err));

  }

  callApiBalance = async () => {
    console.log("call callApiBalance");
    const response = await fetch('/api/balance');
    const body = await response.json();
    alert(body);
    console.log("orders: " + body.orders);
    if (response.status !== 200) throw Error(body.message);
    return body.orders;
  };

  callApiOrders = async () => {
    console.log("call orders");
    const response = await fetch('/api/orders');
    const body = await response.json();
    alert(body);
    console.log("orders: " + body);
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">          
          <p>
            Archon Web App
          </p>   
        </header>
        
        <p>Balance: {this.state.balance}</p>
        <p>Orders: {this.state.orders}</p>
        <hr></hr>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Test - Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
      </div>
    );
  }
}
export default App;