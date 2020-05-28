import React from 'react'
import sauces from '../../Assets/Json/sauces.json'

export default function WingForm() {
    const handleChange = e => {
        console.log(e.target.name)
    }

    return(
        <div className='wingDiv'>
            <h2>Wings</h2>
            <form className='wingForm'>
                <p>Type</p>
                <select onChange={handleChange}>
                    <option value='boned'>Bone-In</option>
                    <option value='boneless'>Boneless</option>
                </select>
                <p>Amount</p>
                <select onChange={handleChange}>
                    <option value='8'>8 Count</option>
                    <option value='16'>16 Count</option>
                    <option value='24'>24 Count</option>
                </select>
                <p>Sauce</p>
                    {sauces.map(sauce => {
                        return(
                            <div>
                                <label>
                                    <input
                                        id='toppingInput'
                                        type='radio'
                                        name='sauces'
                                        value={sauce.value}
                                        // checked={pizza.toppings.pepperoni}
                                        onChange={handleChange}
                                        />
                                    {sauce.name}
                                </label>
                        </div>
                        )
                    })}
            </form>
        </div>
    )
}