import React, { useState } from 'react'
import Cart from './Cart'
import Pizza from '../../Assets/pizza.png'
import Wings from '../../Assets/wings.png'
import Sides from '../../Assets/fries.png'
import Drinks from '../../Assets/drinks.png'
import '../../Styles/home.scss'

export default function Home() {
    const [selected, setSelected] = useState({
        pizza: true,
        wings: false,
        sides: false,
        drinks: false
    })

    const handleChange = e => {
        setSelected({
            pizza: false,
            wings: false,
            sides: false,
            drinks: false,
            [e.target.value]: true
        })
    }


    console.log(selected)
    return(
        <div className='homeDiv'>
            <div className='homeRadioDiv'>
                <form className='foodForm' onChange={handleChange}>
                    <div className='radioDiv'>
                        <img src={Pizza} />
                        <input
                            type='radio'
                            value='pizza'
                            name='food'
                            defaultChecked='defaultChecked'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Wings} />
                        <input
                            type='radio'
                            value='wings'
                            name='food'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Sides} />
                        <input
                            type='radio'
                            value='sides'
                            name='food'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Drinks} />
                        <input
                            type='radio'
                            value='drinks'
                            name='food'
                        />
                    </div>
                </form>
            </div>
            <div className='homeCartDiv'>
                <Cart />
            </div>
        </div>
    )
}