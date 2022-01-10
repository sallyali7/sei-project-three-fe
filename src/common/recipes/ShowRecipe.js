import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRecipe, addFavourite } from '../../lib/api'
import Error from '../Error'
import Loading from '../Loading'


function ShowRecipes(){
  const { recipeId } = useParams()
  const [recipe, setRecipe] = React.useState(null)
  const [isError, setIsError] = React.useState(null)
  const isLoading = !recipe && !isError
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleRecipe(recipeId)
        setRecipe(res.data)
      } catch (err) {
        setIsError(true)
      }
    
    }
    getData()
  }, [recipeId])

  const handleFavouriteClick = async e => {
    e.preventDefault()
    // this function should have a toggle - add favourite, remove favourite

    try {
      // const res = 
      await addFavourite(recipeId) // change this to an addFavourite function
      // do something with res.data here?
      // maybe change some state that changes the nature of the favourite button
    } catch (err) {
      console.log('error')
      // setIsError(true)
    }
  }
  
  return (
    <section>
      <div className="recipe-show-container">
        {isError && <Error />}
        {isLoading && <Loading />}
        {recipe ? (
          <div className="recipe-card-container">
            <h2 className="recipe-card-title">
              {recipe.title}
            </h2>
            <div className="recipe-course-container">
              <p className="recipe-course">
                {recipe.course}             
              </p>
            </div>
            <div className="recipe-card-image-container">
              <figure className="recipe-card-image">
                <img src={recipe.image} alt={recipe.name} height={500} width= {700}/>
              </figure>  
              <button className="faveBtn" onClick={handleFavouriteClick}>
                <i className="bi-bookmark-heart"> Add to Favourites</i>
              </button>     
              <div className="recipe-minutes-container">
                <p><i className="bi bi-clock"></i><strong> Cook Time: </strong> {recipe.prepTime} Minutes </p>                 
              </div>       
            </div>
            <div className="recipe-macros-container">
              <div className="recipe-macros-title">
                <h3>Nutrition</h3>
              </div>     
              <div className="recipe-macros">         
                <p> <strong>Calories:</strong> {recipe.calories} kcal </p> 
                <p><strong>Protein:</strong> {recipe.protein}g </p>
                <p><strong> Carbs:</strong> {recipe.carbs}g </p>
                <p><strong>Fats:</strong> {recipe.fats}g</p>
              </div>
            </div>
            <div className="recipe-ingredients-container">
              <div className="recipe-ingredients-title">
                <h3>Ingredients</h3>   
              </div>
              <div className="recipe-ingredients">
                
                <ul className="recipes-list">
                  
                  {recipe.ingredients.map((ingredient, index) => {
                    return  <li key={index}>{ingredient}</li>                                
                  })}   
                </ul>   
              </div>                   
            </div>
            <div className="recipe-preparation-container">
              <div className="recipe-preparation-title">
                <h3>Preparation</h3>
              </div>
              <div className="recipe-preparation">
                <ul className="recipes-list">
                  {recipe.preparation.map((prepare, index) => {
                    return <li key={index}>{prepare}</li>
                  })}
                </ul>
              </div>
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