import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customer List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>
  render(){
    return (
      <Router>
        <div>
          <Route exac path="/" Component={HomeContainer} />
          <Route exac path="/customers" Component={this.renderCustomerListContainer} />
          <Switch>
            <Route path="/customers/new" Component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" Component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
