import React from 'react';
import PropTypes from 'prop-types';

const CustomersList = ({ customers}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map( c => 
                        <CustomersList
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                            >
                        </CustomersList>
                    )
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
};

export default CustomersList;