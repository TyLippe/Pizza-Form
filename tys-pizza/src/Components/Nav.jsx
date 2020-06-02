import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import '../Styles/nav.scss'

export default function NavBar() {
    let history = useHistory()
    let location = useLocation()

    const handleClick = (destination) => {
        if(destination === 'register'){
            history.push('/register')
        } else {
            history.push('/')
        }
    }

    const signOut = () => {
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className='navBar'>
            <h1>Ty's Pizza</h1>
            {location.pathname === '/' && 
                <button onClick={() => handleClick('register')}>Register</button>}
            {location.pathname === '/register' 
                && <button onClick={() => handleClick()}>Log In</button>}
            {location.pathname === '/home' 
                && <button onClick={signOut}>Sign Out</button>}
        </div>
    )
}
