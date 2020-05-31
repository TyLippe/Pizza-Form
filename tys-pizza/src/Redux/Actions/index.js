import axios from 'axios'
import {axiosWithAuth} from '../../axiosWithAuth'

const baseURL = `https://tys-pizza.herokuapp.com/api` 

// Login
export const FETCH_USER = 'FETCH_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const FAILED_USER = 'FAILED_USER'

// Register
export const CREATE_USER = 'CREATE_USER'
export const SUCCESS_CREATE = 'SUCCESS_CREATE'
export const FAILED_CREATE = 'FAIELD_CREATE'

// Get Order 
export const FETCH_ORDER = 'FETCH_ORDER'
export const SUCCESS_ORDER = 'SUCCESS_ORDER'
export const FAILED_ORDER = 'FAILED_ORDER'

// Edit Order
export const ADD_TO_ORDER = 'ADD_TO_ORDER'
export const FAILED_TO_ADD = 'FAILED_TO_ADD'
export const DELETE_FROM_ORDER = 'DELETE_FROM_ORDER'

export function login(creds) {
    return dispatch => {
        dispatch({type: FETCH_USER})
            axios
                .post(baseURL + '/login', creds)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch({type: SUCCESS_USER})
                })
                .catch(err => dispatch({type: FAILED_USER, payload: err}))
    }
}
