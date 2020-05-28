import React from 'react'
import sides from '../../Assets/Json/sides.json'

export default function SideForm() {
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
    }

    return(
        <div className='sideDiv'>
            <h2>Sides</h2>
            <form className='sideForm'>
                {sides.map(side => {
                    return(
                        <div>
                            <label>
                                <input
                                    id='sideInput'
                                    type='checkbox'
                                    name={side.name}
                                    value={side.value}
                                    // checked={pizza.toppings.pepperoni}
                                    onChange={handleChange}
                                    />
                                {side.name}
                            </label>
                    </div>
                    )
                })}
            </form>
        </div>
    )
}