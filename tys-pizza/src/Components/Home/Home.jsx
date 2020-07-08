import React, { useState } from 'react'
import Cart from './Cart'
import Pizza from '../../Assets/Imgs/pizza.png'
import Wings from '../../Assets/Imgs/wings.png'
import Sides from '../../Assets/Imgs/fries.png'
import Drinks from '../../Assets/Imgs/drinks.png'
import PizzaForm from './Pizza'
import WingForm from './Wings'
import SideForm from './Sides'
import DrinkForm from './Drinks'
import toppings from '../../Assets/Json/toppings.json'
import sauces from '../../Assets/Json/sauces.json'
import sides from '../../Assets/Json/sides.json'
import drinks from '../../Assets/Json/drinks.json'
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

    return(
        <div className='homeDiv'>
            <div className='leftSideDiv'>
                <form className='foodForm' onChange={handleChange}>
                    <label className='radioDiv'>
                        <img src={Pizza} className={selected.pizza ? 'active' : null} />
                        <input
                            type='radio'
                            value='pizza'
                            name='food'
                            defaultChecked='defaultChecked'
                        />
                    </label>
                    <label className='radioDiv'>
                        <img src={Wings} className={selected.wings ? 'active' : null} />
                        <input
                            type='radio'
                            value='wings'
                            name='food'
                        />
                    </label>
                    <label className='radioDiv'>
                        <img src={Sides} className={selected.sides ? 'active' : null} />
                        <input
                            type='radio'
                            value='sides'
                            name='food'
                        />
                    </label>
                    <label className='radioDiv'>
                        <img src={Drinks} className={selected.drinks ? 'active' : null} />
                        <input
                            type='radio'
                            value='drinks'
                            name='food'
                        />
                    </label>
                </form>
                <div className='orderDiv'>
                    {selected.pizza && (<PizzaForm toppings={toppings} />)}
                    {selected.wings && (<WingForm sauces={sauces} />)}
                    {selected.sides && (<SideForm sides={sides} />)}
                    {selected.drinks && (<DrinkForm drinks={drinks} />)}
                </div>
            </div>
            <div className='rightSideDiv'>
                <Cart />
            </div>
        </div>
    )
}