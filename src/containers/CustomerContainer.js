import React, { Component } from 'react';
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import { getCustomerById } from '../selector/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from "./../components/CustomerEdit";
import CustomerData from "./../components/CustomerData";
import { withRouter } from 'react-router-dom';

class CustomerContainer extends Component {
    renderBody = () => (
        <Route 
            path="/customers/:dni/edit"
            children={
                ({match}) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl {...this.props.customer} />
                }
            }
        ></Route>
    )
    //<p>Datos del Cliente "{this.props.customer.name}"</p>
    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
    customer : getCustomerById(state, props)
})

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));