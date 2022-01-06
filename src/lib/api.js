import axios from 'axios'

const baseUrl = '/api'

export function getAllRecipes () {
  return axios.get(`${baseUrl}/recipes`)
}

export function getSingleRecipe (recipeId) {
  return axios.get(`${baseUrl}/recipes/${recipeId}`)
}