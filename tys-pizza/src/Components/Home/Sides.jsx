import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToOrder} from '../../Redux/Actions'

function SideForm(props) {
    const userId = localStorage.userId

    const [side, setSide] = useState({
        item_type: 'Side',
        type: ''
    })

    const handleChange = e => {
        e.persist()
        setSide({
            ...side,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(side.type == ''){
            alert('Please select a side before adding')
        } else {
            props.addToOrder(userId, side)
        }
    }

    return(
        <div className='sideDiv'>
            <h2>Sides</h2>
            <form className='sideForm' onSubmit={handleSubmit}>
                {props.sides.map(side => {
                    return(
                        <div>
                            <label>
                                <input
                                    id='sideInput'
                                    type='radio'
                                    name='type'
                                    value={side.name}
                                    onChange={handleChange}
                                    />
                                {side.name}
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
)(SideForm)