import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  HomeContainer from './containers/HomeContainer';
import "./App.css";
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  renderHome = () => <HomeContainer />;
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
            <Route path="/customers/:dni" render={props => <CustomerContainer dni = {props.match.params.dni}CustomerContainer />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
