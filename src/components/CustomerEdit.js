import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <div>
                    <label htmlFor=""></label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
};

export default reduxForm({ form: "CustomerEdit" })(CustomerEdit);