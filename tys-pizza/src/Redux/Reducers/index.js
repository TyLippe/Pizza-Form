import {combineReducers} from 'redux'

import {loginReducer} from './loginReducer'
import {orderReducer} from './orderReducer'
import {registerReducer} from './registerReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    order: orderReducer,
    register: registerReducer
})

export default rootReducer