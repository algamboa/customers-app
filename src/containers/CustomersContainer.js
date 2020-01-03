import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from "./../components/CustomersList";
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from './../actions/fetchCustomers'

const customers = [
    {
        "dni": "95728938",
        "name": "Alvaro Gamboa",
        "age": "35"
    },
    {
        "dni": "95728939",
        "name": "Maria Monagas",
        "age": "25"
    },
    {
        "dni": "95728940",
        "name": "Rosa Meltrocho",
        "age": "30"
    }
];

class CustomersContainer extends Component {
    componentDidMount = () => {
        this.props.fetchCustomers();
    }
    handlerAddNew = () => {
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handlerAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame 
                    header={"Listado de Clientes"}
                    body={this.renderBody(customers)}
                >
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired
};

const mapDispatchToProps = { fetchCustomers };

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));