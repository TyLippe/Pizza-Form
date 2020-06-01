import React, {useEffect, useState} from 'react'
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
                return(
                    <div>
                        <p>{item.item_type}</p>
                        <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    </div>
                )
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