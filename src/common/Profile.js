import React, { useEffect } from 'react'
// import Error from '../Error'

import { getProfileInfo, getFavourites } from '../lib/api'
// import { getPayloadSub } from '../lib/auth'

// uncomment this
import { getId } from '../lib/auth'

// import the RecipeCard component here
import RecipeCard from '../common/recipes/RecipeCard.js'

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

  // add a useEffect hook here that makes a getFavourites request (imported from the api) and sets the favourites state with setFavourites
  // model the hook above closely
  // console log the res.data and see what it looks like
  // we can expect to recieve a list of objects

  // call getId() (from lib/auth) to obtain the user id
  // pass an id variable to the getFavourites request
  React,useEffect(() => {
    const getData = async () => {
      console.log('attempting get favourites')
      try { 
        const id = getId()
        const res = await getFavourites(id)
        console.log('successful response')
        console.log('res.data: ', res.data)
        setFavourites(res.data)
      } catch (err) {
        console.log('getting favourites info error')
      }
    }
    getData()
  }, [])

  
  return (
    <>
      <div className="profile-container">      
        <ul className="profile-list">
          <li className="profile-picture"> {
            (profileInfo && profileInfo.profileImage) &&
        <img src={profileInfo.profileImage} height="200" width="200" alt="profile image"></img>
          }
          {(profileInfo && (!profileInfo.profileImage)) &&
          <p>No profile image</p>
          }
          </li>
          <li className="profile-list-item"><strong>First name:</strong> {
            profileInfo && profileInfo.firstName
          }
          </li>
          <li className="profile-list-item"><strong>Last name:</strong> {
            profileInfo && profileInfo.lastName
          }</li>
          <li className="profile-list-item"><strong>Username:</strong> {
            profileInfo && profileInfo.username
          }</li>
          <li className="profile-list-item"><strong>Email:</strong> {
            profileInfo && profileInfo.email
          }</li>
              
        </ul>
        
        <h2 className="profile-fave">Favourites</h2>
        <div> {
          (favourites && (favourites.length > 0)) &&
        favourites.map(favourite => (
          <RecipeCard
            key={favourite._id}
            title={favourite.title}
            image={favourite.image}
            recipeId={favourite._id}
            course={favourite.course}
          />
        ))
        
          // edit this so it comes from favourites state 
          // (profileInfo && (profileInfo.favourites.length > 0)) &&
          // profileInfo.favourites.map(favourite =>
          // for each favourite, render a recipe card, passing it the key, title, image, recipeId and course 

          //<p>favourites go here</p>
          // <p key={favourite}>{favourite}</p>
          // )
        }
        </div>
      </div>
    </>
  )
}

export default Profile