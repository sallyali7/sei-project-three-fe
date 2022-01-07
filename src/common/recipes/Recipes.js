import React from 'react'
import { getAllRecipes } from '../../lib/api'
import RecipeCard from './RecipeCard'

function RecipesPage(){
  const [recipes, setRecipes] = React.useState(null)
  const [selectedCourse, setSelectedCourse] = React.useState('All Meals')
  const [searchedValue, setSearchedValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllRecipes()     
      setRecipes(res.data)
    }
    getData()
  }, [])

  const handleSelect = (e) => {
    setSelectedCourse(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchedValue(e.target.value)
  }
  console.log(searchedValue)
  // const filteredSearch = (recipes) => {

  // } 

  const filteredCourses = (recipes) => {
    return recipes.filter(recipe => {
      return (
        recipe.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
        recipe.course === selectedCourse || selectedCourse === 'All Meals'
      )
    })
  }

  return (
    <section className="section">
      <div>
        <input className="input-field" placeholder="Search..." onChange={handleSearch}/>
        <select onChange={handleSelect}>
          <option> All Meals</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      {recipes &&
        filteredCourses(recipes).map(recipe => (
          <RecipeCard
            key={recipe._id}
            title={recipe.title}            
            image={recipe.image}
            recipeId={recipe._id}
            course={recipe.course}
            
          />
        )
      ) 
      }
    </section>         
  )
}

export default RecipesPage