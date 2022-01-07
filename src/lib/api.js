import axios from 'axios'

const baseUrl = '/api'

export function getAllRecipes() {
  return axios.get(`${baseUrl}/recipes`)
}

export function getSingleRecipe(recipeId) {
  return axios.get(`${baseUrl}/recipes/${recipeId}`)
}

// * Auth Requests

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}