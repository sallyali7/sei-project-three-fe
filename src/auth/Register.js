import React from 'react'
import { Link } from 'react-router-dom'
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
    <section className='authContainer'>
      <div className='authCard'>
        <form className='authForm' onSubmit={handleSubmit}>
          <div className='authField'>
            <label className='authLabel' htmlFor='firstName'>
              First name
            </label>
            <input
              placeholder='First name'
              name='firstName'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='lastName'>
              Last name
            </label>
            <input
              placeholder='Last name'
              name='lastName'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='email'>
              Email
            </label>
            <input
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='username'>
              Username
            </label>
            <input
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='password'>
              Password
            </label>
            <input
              placeholder='Password'
              type="password"
              name='password'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='passwordConfirmation'>
              Confirm Password
            </label>
            <input
              placeholder='Confirm password'
              type="password"
              name='passwordConfirmation'
              onChange={handleChange}
            />
          </div>
          <div className='authField'>
            <label className='authLabel' htmlFor='image'>
              Profile Image
            </label>
            <input
              type='file'
              accept='image/*'
              name='profileImage'
              onChange={handleImageUpload}
            />
          </div>
          {/* insert spinner */}
          {isUploadingImage && <Loading />}
          <div className='authField'>
            <button className='authButton' type='submit'>Register</button>
          </div>
        </form>
        <p className=''>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </section>
  )
}

export default Register