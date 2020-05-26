import React from 'react'
import Cart from './Cart'
import Pizza from '../../Assets/pizza.png'
import Wings from '../../Assets/wings.png'
import Sides from '../../Assets/fries.png'
import Drinks from '../../Assets/drinks.png'
import '../../Styles/home.scss'

export default function Home() {
    return(
        <div className='homeDiv'>
            <div className='homeRadioDiv'>
                <form className='foodForm'>
                    <div className='radioDiv'>
                        <img src={Pizza} />
                        <input
                            type='radio'
                            value='pizza'
                            name='food'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Wings} />
                        <input
                            type='radio'
                            value='pizza'
                            name='food'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Sides} />
                        <input
                            type='radio'
                            value='pizza'
                            name='food'
                        />
                    </div>
                    <div className='radioDiv'>
                        <img src={Drinks} />
                        <input
                            type='radio'
                            value='pizza'
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