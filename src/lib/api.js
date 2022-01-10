import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * Recipe Request

export function getAllRecipes() {
  return axios.get(`${baseUrl}/recipes`)
}

export function getSingleRecipe(recipeId) {
  return axios.get(`${baseUrl}/recipes/${recipeId}`)
}

export function addFavourite(recipeId) {
  return axios.post(`${baseUrl}/recipes/${recipeId}`, recipeId, headers())
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