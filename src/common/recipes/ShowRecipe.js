
import React from 'react'
import { useParams } from 'react-router-dom'
import { deleteRecipeComment, getSingleRecipe, toggleFavourite } from '../../lib/api' //getProfileInfo,
import Error from '../Error'
import Loading from '../Loading'
import RecipeCommentCard from './RecipeCommentCard'
import RecipeCommentForm from './RecipeCommentForm'
import { isAuthenticated } from '../../lib/auth'


function ShowRecipes(){
  const { recipeId } = useParams() //,userId
  const [recipe, setRecipe] = React.useState(null)
  const [isError, setIsError] = React.useState(null)
  const [hasFavourited, setHasFavourited] = React.useState(false)
  const isLoading = !recipe && !isError
  // write some state here - look at the example 3 lines above - the state variable should be called isFavourite, the setter function should be called setIsFavourite, the default value should be false (not sure about that though...)
  
  const fetchRecipe = React.useCallback(() => {
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

  React.useEffect(() => {
    fetchRecipe()
  }, [recipeId, fetchRecipe])

  const handleFavouriteClick = async e => {
    e.preventDefault()
    try {
      const faveClick = await toggleFavourite(recipeId)
      console.log(faveClick.data.favouritedBy)
      setHasFavourited(!hasFavourited)
        
  
      // set the state variable here to the opposite of what it already was (see the example in Cheesebored - Navbar.js)
      // note - may need to use the prevIsFavourite variable, but probably not
    } catch (err) {
      console.log('error')
      // setIsError(true)
    }
  }
  console.log(hasFavourited)
  // const addToFave = async () =>  {  
  //   try {
  //     const addFavourite = await getProfileInfo(userId)
  //     console.log(addFavourite)
  //   } catch (err) {
  //     console.log('error')
  //   }   
  // }
  // console(addToFave)
  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Do you want to delete this comment?')) {
      try {
        await deleteRecipeComment(recipeId, commentId)
        fetchRecipe()
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  return (
    <section>
      <div className="recipe-show-container">
        {isError && <Error />}
        {isLoading && <Loading />}
        {recipe && (
          <>
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
                {/* Use conditional rendering here to display either 'Add to favourites' or 'Remove from favourites' depending on the isFavourite state variable */}
                {hasFavourited ? 
                  <button className="faveBtn" onClick={handleFavouriteClick}>                
                    <i className="bi-bookmark-heart"> Remove Favourites</i>
                  </button>   
                  : 
                  <button className="faveBtn" onClick={handleFavouriteClick}>                
                    <i className="bi-bookmark-heart"> Add to Favourites</i>
                  </button>   
                }
                
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
              <div className="column">
                {recipe.comments.map(comment => (
                  <RecipeCommentCard
                    key={comment._id}
                    text={comment.text}
                    addedBy={comment.addedBy}
                    handleDelete={() => handleDeleteComment(comment._id)}
                  />
                ))}
              </div>
              {isAuthenticated() && (
                <RecipeCommentForm
                  fetchRecipe={fetchRecipe}
                  recipeId={recipeId}
                />
              )}
            </div>
          </>
        )
        }
      </div>
    </section>
          
  )
}

export default ShowRecipes