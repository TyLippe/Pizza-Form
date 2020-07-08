import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToOrder} from '../../Redux/Actions'

function DrinkForm(props) {
    const userId = localStorage.userId

    const [drink, setDrink] = useState({
        item_type: 'Drink',
        size: 'Two Liter',
        type: ''
    })

    const handleChange = e => {
        e.persist()
        setDrink({
            ...drink,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(drink.type == '') {
            alert('Please select a drink before adding')
        } else {
            props.addToOrder(userId, drink)
        }
    }

    return(
        <div className='drinkDiv'>
            <h2>Drinks</h2>
            <form className='drinkForm' onSubmit={handleSubmit}>
                <p>Size</p>
                <select onChange={handleChange} name='size'>
                    <option value='Two Liter'>2 Liter Bottle</option>
                    <option value='Bottle'>20 oz Bottle</option>
                    <option value='Can'>8oz Can</option>
                </select>
                {props.drinks.map(drink => {
                    return(
                        <div>
                            <label>
                                <input
                                    id='drinkInput'
                                    type='radio'
                                    name='type'
                                    value={drink.name}
                                    onChange={handleChange}
                                    />
                                {drink.name}
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
)(DrinkForm)