import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersList from "./../components/CustomersList";
import CustomersActions from '../components/CustomersActions';

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
    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.addHandlerNew}>Nuevo Cliente</button>
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

export default CustomersContainer;