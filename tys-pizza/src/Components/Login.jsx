import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import '../Styles/login.scss'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
    password: yup
        .string()
        .required('Please enter your password')
})

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
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
console.log(user)
    return(
        <div className='loginDiv'>
            <h2>Welcome Back</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
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

                <button disabled={buttonDisabled} className={buttonDisabled ? 'disabled' : 'active'}>
                    Log In
                </button>
            </form>
        </div>
    )
}