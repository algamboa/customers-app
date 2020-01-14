import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

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
]
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);