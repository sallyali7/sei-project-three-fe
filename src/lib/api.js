import axios from 'axios'

const baseUrl = '/api'

// * Recipe Request

export function getAllRecipes() {
  return axios.get(`${baseUrl}/recipes`)
}

export function getSingleRecipe(recipeId) {
  return axios.get(`${baseUrl}/recipes/${recipeId}`)
}

// * Profile Request

// make a function for getting profile information
export function getProfileInfo(userId) {
  console.log(userId)
  return axios.get(`${baseUrl}/profile/${userId}`)
}

// * Auth Requests

export function registerUser(formdata) {
  console.log(formdata) // test
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  // console log formdata here (test)
  return axios.post(`${baseUrl}/login`, formdata)
}