import React from 'react'
// import Error from '../Error'

import { getProfileInfo } from '../lib/api'

// import { getPayloadSub } from '../lib/auth'

// uncomment this
import { getId } from '../lib/auth'

function Profile() {
  const [profileInfo, setProfileInfo] = React.useState(null)
  // const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      console.log('attempting request')
      try {
        const id = getId()

        // const json4 = {
        //   userId: `${id}`,
        // }

        // const json3 = "{"userId":"${id}"}"

        // const reqString = `{ "userId" : "${id}`
        // const json2 = JSON.parse()

        // const objId = { userId: id }
        // const json = JSON.parse(JSON.stringify(objId))
        // console.log('json4: ', json4)
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

  // deduce which user is viewing the profile page by making a request and sending/using the web token in the body to know which profile info to return in the response
  // maybe import getToken() from auth.js and call it

  // note: look at cheesebored - auth.js - isOwner function - this is the key to the problem
  // we write a modified version of isOwner to obtain info about the user based on their payload (or more specifically, equality between the userId and payload.sub)
  // find out where it's called from as this will help too - it is called at least by CheeseShow.js

  // also investigate comments as these are intrinsically tied to a unique user
  // note the user of isOwner(user._id) in CheeseCommentCard - user is passed as a prop (it is imported by CheeseShow.js)

  // one approach is to return and save the user id during the interactive login process, and then retrieve it from local storage and send it as part of the request when mounting the profile page - see the login process and find how to store the user id in local storage

  return (
    // display profileInfo
    <>
      <ul>
        <li>Profile image: {
          (profileInfo && profileInfo.profileImage) &&
          <img src={profileInfo.profileImage} height="200" width="200" alt="profile image"></img>
        }
        {(profileInfo && (!profileInfo.profileImage)) &&
            <p>No profile image</p>
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
        <li>Favourites: {
          (profileInfo && (profileInfo.favourites.length > 0)) &&
          profileInfo.favourites.map(favourite =>
          // for each favourite, render a recipe card, passing it the key, title, image, recipeId and course 


            <p key={favourite}>{favourite}</p>
          )
        }</li>
        <hr></hr>
        <li>Your user id is: {getId()}</li>
        <li>Type of profileInfo: {typeof (profileInfo)}</li>
      </ul>
      <hr></hr>
    </>
  )
}

export default Profile