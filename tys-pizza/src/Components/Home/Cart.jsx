import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getOrder, deleteFromOrder} from '../../Redux/Actions'
import '../../Styles/cart.scss'

function Cart(props) {
    const userId = localStorage.userId
    const order = props.orderData

    useEffect(() => {
        props.getOrder(userId)
    }, [props.update])

    const removeFromCart = id => {
        props.deleteFromOrder(id)
    }

    return(
        <div className='cartDiv'>
            <h1>User's CART</h1>
            {order && order.map(item => {
                if(item.item_type == 'Pizza') {
                    return(
                        <div>
                            <p>{item.item_type}</p>
                            <li>{item.crust} Crust</li>
                            <li>{item.sauce} Sauce</li>
                            <li>{item.cheese} Cheese</li>
                            {item.toppings.length > 2 ? (<li>w/ {item.toppings}</li>) : <li>No Toppings</li>}
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    )
                } else if(item.item_type == 'Wings') {
                    return(
                        <div>
                            <p>{item.item_type}</p>
                            <li>{item.type}</li>
                            <li>{item.amount}</li>
                            <li>{item.sauce}</li>
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    )
                } else if(item.item_type == 'Side') {
                    return(
                        <div>
                            <p>{item.item_type}</p>
                            <li>{item.type}</li>
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    )
                } else {
                    return(
                        <div>
                            <p>{item.item_type}</p>
                            <p>{item.size}</p>
                            <p>{item.type}</p>
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orderData: state.order.orderData[0],
        update: state.order.update
    }
}

export default connect(
    mapStateToProps,
    {getOrder, deleteFromOrder}
)(Cart)