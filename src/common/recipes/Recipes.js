import React from 'react'
import { getAllRecipes } from '../../lib/api'
import RecipeCard from './RecipeCard'
import Error from '../Error'
import Loading from '../Loading'

function RecipesPage() {
  const [recipes, setRecipes] = React.useState(null)
  const [selectedCourse, setSelectedCourse] = React.useState('All Meals')
  const [searchedValue, setSearchedValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !recipes && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllRecipes()
        setRecipes(res.data)
      } catch (err) {
        setIsError(true)
      }
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
  console.log(searchedValue) // test


  const filteredCourses = (recipes) => {
    return recipes.filter(recipe => {
      return (
        recipe.title.toLowerCase().includes(searchedValue.toLowerCase()) &&
        (recipe.course === selectedCourse || selectedCourse === 'All Meals')
      )
    })
  }

  return (
    <section>
      <div className="searchdropmenu">
        <div className="input-group mb-3">
          <div className="input-group-text p-0">
            <input className="form-control" type="search" placeholder="Recipe Search..." onChange={handleSearch}/>
          </div>
          <div className="dropdown">
            <select onChange={handleSelect} className="form-select form-select-md shadow-none bg-light border-2" type="button">
              <option> All Meals</option>
              <option value="Breakfast" className="dropitem">Breakfast</option>
              <option value="Lunch" className="dropitem">Lunch</option>
              <option value="Dinner" className="dropitem">Dinner</option>
              <option value="Snacks" className="dropitem">Snacks</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container index">
        <div className="row row-cols-4 gx-2">
          {isError && <Error />}
          {isLoading && <Loading />}
          {recipes &&
          filteredCourses(recipes).map(recipe => (
            <RecipeCard
              key={recipe._id}
              title={recipe.title}
              image={recipe.image}
              recipeId={recipe._id}
              course={recipe.course}
            />
          ))
          }
        </div>
      </div>
    </section>
  )
}

export default RecipesPage