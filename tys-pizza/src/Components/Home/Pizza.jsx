import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToOrder} from '../../Redux/Actions'

function PizzaForm(props) {
    const userId = localStorage.userId

    const [pizza, setPizza] = useState({
        item_type: 'Pizza',
        crust: 'Traditional',
        sauce: 'Traditional',
        cheese: 'Regular',
        toppings: []
    })

    const handleChange = e => {
        e.persist()
        setPizza({
            ...pizza,
            [e.target.name]: e.target.value
        })
    }

    const handleCheck = e => {
        e.persist()
        if(pizza.toppings.includes(e.target.value)) {
            pizza.toppings.pop(e.target.value)
        } else {
            pizza.toppings.push(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addToOrder(userId, pizza)
    }

    return(
        <div className='pizzaDiv'>
            <h2>Pizza</h2>
            <form className='pizzaForm' onSubmit={handleSubmit}>
                <p>Crust</p>
                <select onChange={handleChange} name='crust'>
                    <option value='Traditional'>Traditional Crust</option>
                    <option value='Thin'>Thin Crust</option>
                    <option value='Pan'>Pan Pizza</option>
                </select>
                <p>Sauce</p>
                <select onChange={handleChange} name='sauce'>
                    <option value='Traditional'>Traditional Sauce</option>
                    <option value='White Garlic'>White Garlic Sauce</option>
                    <option value='BBQ'>BBQ Sauce</option>
                </select>
                <p>Cheese</p>
                <select onChange={handleChange} name='cheese'>
                    <option value='Regular'>Regular Cheese</option>
                    <option value='Extra'>Extra Cheese</option>
                    <option value='None'>No Cheese</option>
                </select>
                <p>Toppings</p>
                    {props.toppings.map(topping => {
                        return(
                            <div>
                                <label>
                                    <input
                                        id='toppingInput'
                                        type='checkbox'
                                        name='toppings'
                                        value={topping.name}
                                        onChange={handleCheck}
                                        />
                                    {topping.name}
                                </label>
                        </div>
                        )
                    })}
                <button>
                    Add To Cart
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {addToOrder}
)(PizzaForm)