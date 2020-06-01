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
export const SUCCESS_ADD = 'SUCCESS_ADD'
export const FAILED_TO_ADD = 'FAILED_TO_ADD'

// Delete From Order
export const DELETE_FROM_ORDER = 'DELETE_FROM_ORDER'
export const SUCCESS_DELETE = 'SUCCESS_DELETE'
export const FAILED_DELETE = 'FAILED_DELETE'

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


export function register(userData) {
    return dispatch => {
        dispatch({type: CREATE_USER})
            axios 
                .post(baseURL + '/register', userData)
                .then(res => {
                    dispatch({type: SUCCESS_CREATE})
                })
                .catch(err => dispatch({type: FAILED_CREATE, payload: err}))
    }
}

export function getOrder(userId) {
    return dispatch => {
        dispatch({type: FETCH_ORDER})
            axiosWithAuth()
                .get(baseURL + `${userId}/order`)
                .then(res => {
                    dispatch({type: SUCCESS_ORDER, payload: res.data})
                })
                .catch(err => dispatch({type: FAILED_ORDER, payload: err}))
    }
}

export function addToOrder(userId, order) {
    return dispatch => {
        dispatch({type: ADD_TO_ORDER})
            axiosWithAuth()
                .post(baseURL + `/order${userId}/food`, order)
                .then(res => {
                    dispatch({type: SUCCESS_ADD, payload: res.data})
                })
                .catch(err => dispatch({type: FAILED_TO_ADD, payload: err}))
    }
}

export function deleteFromOrder(foodId) {
    return dispatch => {
        dispatch({type: DELETE_FROM_ORDER})
            axiosWithAuth()
            .delete(baseURL + `/order${foodId}`)
            .then(res => {
                dispatch({type: SUCCESS_DELETE, payload: res.data})
            })
            .catch(err => dispatch({type: FAILED_DELETE, payload: err}))
    }
} 