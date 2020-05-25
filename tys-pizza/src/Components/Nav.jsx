import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import '../Styles/nav.scss'

export default function NavBar() {
    let history = useHistory()
    let location = useLocation()

    function handleClick(destination) {
        if(destination === 'register'){
            history.push('/register')
        } else if(destination === 'signOut'){
            history.push('/')
        } else {
            history.push('/')
        }
    }

    return(
        <div className='navBar'>
            <h1>Ty's Pizza</h1>
            {location.pathname === '/' && 
                <button onClick={() => handleClick('register')}>Register</button>}
            {location.pathname === '/register' 
                && <button onClick={() => handleClick()}>Log In</button>}
            {location.pathname === '/home' 
                && <button onClick={() => handleClick('signOut')}>Sign Out</button>}
        </div>
    )
}
