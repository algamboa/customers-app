import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
    handlerOnClick = () => {
        this.props.history.push("/customers");
    }
    render() {
        return(
            <div>
                <AppFrame
                    header='Home'
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

export default withRouter(HomeContainer);