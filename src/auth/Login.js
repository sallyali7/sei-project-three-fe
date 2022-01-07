import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { loginUser } from '../lib/api.js'
import { setToken } from '../lib/auth.js'

function Login() {
  // use history
  const history = useHistory()

  // set form data useState
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })

  // error useState
  // const [isError, setIsError] = React.useState(false)

  // handleChange
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // handleSubmit
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await loginUser(formData)
      setToken(res.data.token)
      // createNotification(res.data.message)
      history.push('/recipes')
    } catch (err) {
      // setIsError(true)
    }
  }

  return (
    <section className="authContainer">
      <div className="authCard" id="loginCard">
        <form
          className='authForm'
          onSubmit={handleSubmit}
        >
          <div className='authField'>
            <label className='authLabel' htmlFor='email'>
              Email
            </label>
            <input
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='password'>
              Password
            </label>
            <input
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <div className="authField">
            <button type="submit" className="authButton">
              Log in
            </button>
          </div>
        </form>
        <p className="">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  )
}

export default Login