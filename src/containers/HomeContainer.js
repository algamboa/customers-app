import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {
    handlerOnClick = () => {
        console.log("Handler on click");
    }
    render() {
        return(
            <div>
                <AppFrame header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handlerOnClick}>Listado de Clientes</button>
                            </CustomersActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    };
};

HomeContainer.propTypes = {
    
};

export default HomeContainer;