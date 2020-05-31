import {
    FETCH_ORDER,
    SUCCESS_ORDER,
    FAILED_ORDER,
    ADD_TO_ORDER,
    SUCCESS_ADD,
    FAILED_TO_ADD,
    DELETE_FROM_ORDER,
    SUCCESS_DELETE,
    FAILED_DELETE
} from '../Actions'

const initialState = {
    orderData: [],
    fetchingOrder: false,
    addingOrder: false,
    deletingOrder: false,
    err: null
}

export function orderReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ORDER:
            return{
                ...state,
                orderData: [],
                fetchingOrder: true,
                addingOrder: false,
                deletingOrder: false,
                err: null
            }
        case SUCCESS_ORDER:
            return{
                ...state,
                orderData: [action.payload],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: null
            }
        case FAILED_ORDER:
            return{
                ...state,
                orderData: [],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: 'Unable to fetch order'
            }
        case ADD_TO_ORDER:
            return{
                ...state,
                orderData: [],
                fetchingOrder: false,
                addingOrder: true,
                deletingOrder: false,
                err: null
            }
        case SUCCESS_ADD:
            return{
                ...state,
                orderData: [action.payload],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: null
            }
        case FAILED_TO_ADD:
            return{
                ...state,
                orderData: [],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: 'Unable to add to order'
            }
        case DELETE_FROM_ORDER:
            return{
                ...state,
                orderData: [],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: true,
                err: null
            }
        case SUCCESS_DELETE:
            return{
                ...state,
                orderData: [action.payload],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: null
            }
        case FAILED_DELETE:
            return{
                ...state,
                orderData: [],
                fetchingOrder: false,
                addingOrder: false,
                deletingOrder: false,
                err: 'Unable to delete from order'
            }
    }
}