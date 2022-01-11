import React from 'react'
// import { Link } from 'react-router-dom'
// add more imports here (in particular, registerUser from lib/api)
import { useHistory } from 'react-router'
import { registerUser } from '../lib/api.js'
import axios from 'axios'
import Loading from '../common/Loading.js'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  profileImage: '',
  isAdmin: 'false',
  favourites: [], // should this be '[]'
}


function Register() {
  // add constants
  const [formData, setFormData] = React.useState(initialState)
  const [isUploadingImage, setIsUploadingImage] = React.useState(false)
  const history = useHistory()

  // handle change (needs error handling)
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // handle submit - edit this
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('form data submitted', formData)
    try {
      await registerUser(formData)
      history.push('/login')
    } catch (err) {
      // setFormErrors(err.response.data.errors)
      console.log('registering error')
    }
  }



  const handleImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    setIsUploadingImage(true)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, profileImage: res.data.url })
    setIsUploadingImage(false)
  }

  return (
    <section className="d-flex p-2 bd-highlight">
      <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body">
          <h5 className="card-title">Create an account</h5>
          <form className="card-text .flex-column" onSubmit={handleSubmit}>
            <label className="authLabel" htmlFor='firstName'>
              <i className="bi bi-person-circle"></i>
            </label>
            <input className="regInput"
              placeholder='First name'
              name='firstName'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='lastName'>
              <i className="bi bi-person-fill"></i>
            </label>
            <input 
              placeholder='Last name'
              name='lastName'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='email'>
              <i className="bi bi-person-fill"></i>
            </label>
            <input
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='username'>
              <i className="bi bi-person-circle"></i>
            </label>
            <input
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='password'>
              <i className="bi bi-lock"></i>
            </label>
            <input
              placeholder='Password'
              type="password"
              name='password'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='passwordConfirmation'>
              <i className="bi bi-lock-fill"></i>
            </label>
            <input
              placeholder='Confirm password'
              type="password"
              name='passwordConfirmation'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='image'>
              <i className="bi bi-image"></i>
            </label>
            <input
              type='file'
              accept='image/*'
              name='profileImage'
              onChange={handleImageUpload}
            />
            {isUploadingImage && <Loading />}  
            <button className="register btn btn-primary" type='submit' id="reg">Register</button>
          </form>
          <a href="/login" className="login btn btn-primary" id="log">Login</a>
        </div>
      </div>
    </section>
  )
}

export default Register