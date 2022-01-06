import React from 'react'
import { getAllRecipes } from '../../lib/api'
import RecipeCard from './RecipeCard'

function RecipesPage(){
  const [recipes, setRecipes] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllRecipes()     
      setRecipes(res.data)
    }
    getData()
  }, [])

  return (
    <section className="section">
      {recipes ? (
        recipes.map(recipe => (
          <RecipeCard
            key={recipe._id}
            title={recipe.title}            
            image={recipe.image}
            recipeId={recipe._id}
            
          />
        ))
      ) : (
        <p>it is loading</p>
      )}
    </section>         
  )
}

export default RecipesPage