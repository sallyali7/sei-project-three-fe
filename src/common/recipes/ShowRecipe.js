
import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRecipe } from '../../lib/api'


function ShowRecipes(){
  const { recipeId } = useParams()
  const [recipe, setRecipe] = React.useState(null)
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleRecipe(recipeId)
      // axios.get(`/api/recipes/${recipeId}`)
      setRecipe(res.data)
      console.log(res.data)
    }
    getData()
  }, [recipeId])
  
  return (
    <section>
      <div className="container">
        {recipe ? (
          <div>
            <h2 className="title">
              {recipe.title}
            </h2>
            <h5 className="subtitle">
              {recipe.course}             
            </h5>
            <h5 className="subtitle">
              {recipe.prepTime} Minutes
            </h5>
            <div className="card-image">
              <figure className="card-image">
                <img src={recipe.image} alt={recipe.name} />
              </figure>              
            </div>
            <div className="macros">
              <h3>Calories {recipe.calories}kcal</h3>
              <h3>Protein {recipe.protein}g</h3>
              <h3>Carbs {recipe.carbs}g</h3>
              <h3>Fats {recipe.fats}g</h3>
            </div>
            <div className="ingredients">
              <h3>Ingredients</h3>              
              {recipe.ingredients}                         
            </div>
            <div>
              <h3>Preparation</h3>
              {recipe.preparation}
            </div>
          </div>
        ) : (
          <p> it is loading </p>
        )
        }
      </div>
    </section>
          
  )
}

export default ShowRecipes