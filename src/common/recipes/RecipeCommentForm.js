import { createRecipeComment } from '../../lib/api'
import React from 'react'

function RecipeCommentForm({ fetchRecipe, recipeId }) {
  const [commentValue, setCommentValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setCommentValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('comment value', commentValue)
    try {
      // await createRecipeComment(recipeId, { content: commentValue })
      await createRecipeComment(recipeId, { text: commentValue })
      setCommentValue('')
      fetchRecipe()
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <form className="recipe-comment-container" onSubmit={handleSubmit}>
      <div className="f">
        <div className="c">
          <textarea className="textarea" name="content" onChange={handleChange} value={commentValue}/>
        </div>
        {isError && <p className="help is-danger">Please write a comment and try again!</p>}
      </div>
      <div className="field">
        <button type="submit" className="comment-button">Comment</button>
      </div>
    </form>
  )
}

export default RecipeCommentForm