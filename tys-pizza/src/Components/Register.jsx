import React, {useState, useEffect} from 'react'
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
        .required('Please enter your Zip Code')
})

export default function Register() {
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
                    <input
                        id='nameInput'
                        type='string'
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name.length > 0 ? 'errorInput' : null}
                    />
                </label>
                {/* {errors.name.length > 0 ? (<p className='error'>{errors.name}</p>) : null} */}
                <label>
                    <input
                        id='emailInput'
                        type='string'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email.length > 0 ? 'errorInput' : null}
                    />
                </label>
                {/* {errors.email.length > 0 ? (<p className='error'>{errors.email}</p>) : null} */}
                <label>
                    <input
                        id='passwordInput'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                {errors.password.length > 6 ? (<p className="error">{errors.password}</p>) : null}
                <label>
                    <input
                        id='cityInput'
                        type='string'
                        name='city'
                        placeholder='City'
                        value={formData.city}
                        onChange={handleChange}
                    />
                </label>
                {errors.city.length > 0 ? (<p className='error'>{errors.city}</p>) : null}
                <select>
                    <option value='State'>State</option>
                    <option value='Florida'>Florida</option>
                    <option value='Massachusetts'>Massachusetts</option>
                    <option value='Ohio'>Ohio</option>
                    <option value='Washington'>Washington</option>
                </select>
                {errors.state ==='state' ? (<p className='error'>{errors.state}</p>) : null}
                <label>
                    <input
                        id='zipInput'
                        type='string'
                        name='zip'
                        placeholder='Zip Code'
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </label>
                {errors.zip.length > 0 ? (<p className='error'>{errors.zip}</p>) : null}
                <button disabled={buttonDisabled}>
                    Register
                </button>
            </form>
        </div>
    )
}