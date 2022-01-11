import RecipeCard from '../common/recipes/RecipeCard.js'
import React, { useEffect } from 'react'
import { getProfileInfo, getFavourites } from '../lib/api'
import { getId } from '../lib/auth'
// import Error from '../Error'

// import { getPayloadSub } from '../lib/auth'

function Profile() {
  const [profileInfo, setProfileInfo] = React.useState(null)
  //const [isError, setIsError] = React.useState(false)
  const [favourites, setFavourites] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      console.log('attempting request')
      try {
        const id = getId()
        const res = await getProfileInfo(id)
        console.log('successful response')
        console.log('res.data: ', res.data) // test
        setProfileInfo(res.data)
      } catch (err) {
        // setIsError(true)
        console.log('getting profile info error')
      }
    }
    getData()
  }, [])

  // consider merging this into a single useEffect

  React, useEffect(() => {
    const getData = async () => {
      console.log('attempting get favourites')
      try {
        const id = getId()
        const res = await getFavourites(id)
        console.log('successful favourites response')
        console.log('res.data: ', res.data)
        setFavourites(res.data)
      } catch (err) {
        // setIsError(true)
        console.log('getting favourites info error')
      }
    }
    getData()
  }, [])


  return (
    <>
      <ul>
        <li>Profile image: {
          (profileInfo && profileInfo.profileImage) &&
          <img src={profileInfo.profileImage} height="200" width="200" alt="profile image"></img>
        }
        {(profileInfo && (!profileInfo.profileImage)) &&
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< HEAD
            <p>No profile image</p>
=======
          <p>No profile image</p>
>>>>>>> development
=======
            <p>No profile image</p>
>>>>>>> development
=======
            <p>No profile image</p>
>>>>>>> Stashed changes
        }
        </li>
        <li>First name: {
          profileInfo && profileInfo.firstName
        }
        </li>
        <li>Last name: {
          profileInfo && profileInfo.lastName
        }</li>
        <li>Username: {
          profileInfo && profileInfo.username
        }</li>
        <li>Email: {
          profileInfo && profileInfo.email
        }</li>

        <hr></hr>
        <li>Your user id is: {getId()}</li>
        <li>Type of profileInfo: {typeof (profileInfo)}</li>
      </ul>
      <hr></hr>
      <p>Favourites:</p>
      <div> {
        favourites &&
        favourites.map(favourite => (
          <RecipeCard
            key={favourite._id}
            title={favourite.title}
            image={favourite.image}
            recipeId={favourite._id}
            course={favourite.course}
          />
        ))
      }
      </div>
    </>
  )
}

export default Profile