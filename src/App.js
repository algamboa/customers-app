import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  HomeContainer from './containers/HomeContainer';
import "./App.css";
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  renderHome = () => <HomeContainer />;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <CustomersContainer/>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;
  render(){
    return (
      <Router>
        <div className="App">
          <Route exac path="/" component={this.renderHome} />
          <Route exac path="/customers" component={this.renderCustomerListContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
