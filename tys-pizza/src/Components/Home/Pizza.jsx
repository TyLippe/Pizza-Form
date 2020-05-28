import React from 'react'
import toppings from '../../Assets/toppings.json'

export default function PizzaForm() {
    const handleChange = e => {
        console.log(e.target.name)
    }

    return(
        <div className='pizzaDiv'>
            <h2>Pizza</h2>
            <form className='pizzaForm'>
                <p>Crust</p>
                <select onChange={handleChange}>
                    <option value='traditional'>Traditional Crust</option>
                    <option value='thin'>Thin Crust</option>
                    <option value='pan'>Pan Pizza</option>
                </select>
                <p>Sauce</p>
                <select onChange={handleChange}>
                    <option value='traditional'>Traditional Sauce</option>
                    <option value='white'>White Garlic Sauce</option>
                    <option value='bbq'>BBQ Sauce</option>
                </select>
                <p>Cheese</p>
                <select onChange={handleChange}>
                    <option value='reg'>Regular Cheese</option>
                    <option value='extra'>Extra Cheese</option>
                    <option value='none'>No Cheese</option>
                </select>
                <p>Toppings</p>
                    {toppings.map(topping => {
                        return(
                            <div>
                                <label>
                                    <input
                                        id='toppingInput'
                                        type='checkbox'
                                        name={topping.name}
                                        // checked={pizza.toppings.pepperoni}
                                        onChange={handleChange}
                                        />
                                    {topping.name}
                                </label>
                        </div>
                        )
                    })}
            </form>
        </div>
    )
}