import React from 'react'
import { useHistory } from 'react-router'
// import { Link } from 'react-router-dom'
import { loginUser } from '../lib/api.js'
import { setToken, setId } from '../lib/auth.js'

function Login({ setIsAuth }) {
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
      setId(res.data._id)
      setToken(res.data.token)
      setIsAuth(true)
      // createNotification(res.data.message)
      history.push('/recipes')
    } catch (err) {
      // setIsError(true)
    }
  }

  return (
    <div className="card mw-50 mh-50">
      <div className="row g-0" id="login">
        <div className="col-md-4"> 
          <img src="../assets/healthydinner.jpeg" className="img-fluid rounded-start" alt="roastdinner"/>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">Log in</h5>
            <form className="card-text" onSubmit={handleSubmit}>
              <label className="authLabel" htmlFor="email">
                <i className="bi bi-envelope-fill"></i>
                
              </label>
              <input 
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
              <label className="authLabel" htmlFor='password'>
                <i className="bi bi-unlock-fill"></i>
              </label>
              <input
                placeholder='Password'
                name='password'
                type='password'
                onChange={handleChange}
              />
              <button type="submit" className="authButton">
            Log in
              </button>
            </form>
            <p className="card-text"><small className="text-muted">
    Don&apos;t have an account? </small>
            <button className="regButton"><a to="/register">Register</a></button>
            </p>
          </div>
        </div>
      </div>
    </div>







  // <section className="authContainer">
  //   <div className="authCard" id="loginCard">
  //     <form
  //       className='authForm'
  //       onSubmit={handleSubmit}
  //     >
  //       <div className='authField'>
  //         <label className='authLabel' htmlFor='email'>
  //           Email
  //         </label>
  //         <input
  //           placeholder='Email'
  //           name='email'
  //           onChange={handleChange}
  //         />
  //       </div>

  //       <div className='authField'>
  //         <label className='authLabel' htmlFor='password'>
  //           Password
  //         </label>
  //         <input
  //           placeholder='Password'
  //           name='password'
  //           type='password'
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="authField">
  //         <button type="submit" className="authButton">
  //           Log in
  //         </button>
  //       </div>
  //     </form>
  //     <p className="">
  //       Don&apos;t have an account? <Link to="/register">Register</Link>
  //     </p>
  //   </div>
  // </section>
  )
}

export default Login