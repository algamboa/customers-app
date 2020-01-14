import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from "./../components/CustomersList";
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from './../actions/fetchCustomers'

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
                    body={this.renderBody(this.props.customers)}
                >
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
};

const mapDispatchToProps = { fetchCustomers };

CustomersContainer.defaultProps = {
    customers : []
}

const mapStateToProps = state => ({
    customers: state.customers
});

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));