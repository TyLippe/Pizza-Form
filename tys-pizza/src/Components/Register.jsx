import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import states from '../Assets/states.json'
import * as yup from 'yup'
import '../Styles/register.scss'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Please enter your name'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
    password: yup
        .string()
        .min(6, 'Password minimum of 6 characters')
        .required('Please enter your password'),
    city: yup
        .string()
        .required('Please enter your City'),
    state: yup
        .string()
        .required('Please choose your State'),
    zip: yup
        .string()
        .min(5, 'Please enter your 5 digit zip code')
        .required('Please enter your Zip Code')
})

export default function Register() {
    let history = useHistory()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        state: 'State',
        zip: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zip: ''
    })

    const [user, setUser] = useState([])
    
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        formSchema.isValid(formData)
            .then(valid => {
                setButtonDisabled(!valid)
            })
    }, [formData])

    const handleChange = e => {
        e.persist()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        validateForm(e)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUser(formData)
        history.push('/')
    }

    const validateForm = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    return(
        <div className='registerDiv'>
            <h2>Nice to meet you!</h2>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>
                <div className='xDiv'>
                    {errors.name.length > 0 ? (<p 
                                            className='error' 
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}>
                                            X</p>) : null}
                    {isShown && errors.name.length > 0 && (<p className='errorMessage'>{errors.name}</p>)}
                    <input
                        id='nameInput'
                        type='string'
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name.length > 0 ? 'errorInput' : null}
                    />
                </div>
                </label>

                <label>
                <div className='xDiv'>
                    {errors.email.length > 0 ? (<p 
                                            className='error' 
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}>
                                            X</p>) : null}
                    {isShown && errors.email.length > 0 && (<p className='errorMessage'>{errors.email}</p>)}
                    <input
                        id='emailInput'
                        type='string'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email.length > 0 ? 'errorInput' : null}
                    />
                </div>
                </label>

                <label>
                <div className='xDiv'>
                    {errors.password.length > 0 ? (<p 
                                            className='error' 
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}>
                                            X</p>) : null}
                    {isShown && errors.password.length > 6 && (<p className='errorMessage'>{errors.password}</p>)}
                    <input
                        id='passwordInput'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password.length > 6 ? 'errorInput' : null}
                        />
                </div>
                </label>

                <label>
                <div className='xDiv'>
                    {errors.city.length > 0 ? (<p 
                                            className='error' 
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}>
                                            X</p>) : null}
                    {isShown && errors.city.length > 0 && (<p className='errorMessage'>{errors.city}</p>)}
                    <input
                        id='cityInput'
                        type='string'
                        name='city'
                        placeholder='City'
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city.length > 0 ? 'errorInput' : null}
                    />
                </div>
                </label>

                <select className='stateDropdown'>
                    {states.map(state => {
                        return(<option value={state.name}>{state.name}</option>)
                    })}
                </select>
                
                <label>
                <div className='xDiv'>
                    {errors.zip.length > 0 ? (<p 
                                            className='error' 
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}>
                                            X</p>) : null}
                    {isShown && errors.zip.length > 0 && (<p className='errorMessage'>{errors.zip}</p>)}
                    <input
                        id='zipInput'
                        type='string'
                        name='zip'
                        placeholder='Zip Code'
                        value={formData.zip}
                        onChange={handleChange}
                        className={errors.zip.length > 0 ? 'errorInput' : null}
                    />
                </div>
                </label>

                <button disabled={buttonDisabled} className={buttonDisabled ? 'disabled' : 'active'}>
                    Register
                </button>
            </form>
        </div>
    )
}