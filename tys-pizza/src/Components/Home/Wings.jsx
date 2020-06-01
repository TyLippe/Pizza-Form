import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToOrder} from '../../Redux/Actions'
import sauces from '../../Assets/Json/sauces.json'

function WingForm(props) {
    const userId = localStorage.userId

    const [wings, setWings] = useState({
        item_type: 'wings',
        type: 'bone-in',
        amount: '16',
        sauce: 'naked'
    })

    const handleChange = e => {
        e.persist()
        console.log(e.target.name, e.target.value)
        setWings({
            ...wings,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addToOrder(userId, wings)
    }

    return(
        <div className='wingDiv'>
            <h2>Wings</h2>
            <form className='wingForm' onSubmit={handleSubmit}>
                <p>Type</p>
                <select onChange={handleChange} name='type'>
                    <option value='bone-in'>Bone-In</option>
                    <option value='boneless'>Boneless</option>
                </select>
                <p>Amount</p>
                <select onChange={handleChange} name='amount' defaultValue='16'>
                    <option value='8'>8 Count</option>
                    <option value='16'>16 Count</option>
                    <option value='24'>24 Count</option>
                </select>
                <p>Sauce</p>
                <label>
                    <input  
                        id='toppingInput'
                        type='radio'
                        name='sauce'
                        value='naked'
                        defaultChecked='defaultChecked'
                        onChange={handleChange}
                    />
                    Naked
                </label>
                    {sauces.map(sauce => {
                        return(
                            <div>
                                <label>
                                    <input
                                        id='toppingInput'
                                        type='radio'
                                        name='sauce'
                                        value={sauce.value}
                                        onChange={handleChange}
                                        />
                                    {sauce.name}
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
    return {
        wings: state.wings
    }
}

export default connect(
    mapStateToProps,
    {addToOrder}
)(WingForm)