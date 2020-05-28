import React from 'react'
import drinks from '../../Assets/Json/drinks.json'

export default function DrinkForm() {
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
    }

    return(
        <div className='drinkDiv'>
            <h2>Drinks</h2>
            <form className='drinkForm'>
                <p>Size</p>
                <select onChange={handleChange}>
                    <option value='twoLiter'>2 Liter</option>
                    <option value='bottle'>20 oz</option>
                    <option value='can'>Can</option>
                </select>
                {drinks.map(drink => {
                    return(
                        <div>
                            <label>
                                <input
                                    id='drinkInput'
                                    type='radio'
                                    name='drinks'
                                    value={drink.value}
                                    // checked={pizza.toppings.pepperoni}
                                    onChange={handleChange}
                                    />
                                {drink.name}
                            </label>
                    </div>
                    )
                })}
            </form>
        </div>
    )
}