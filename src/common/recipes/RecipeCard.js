import { Link } from 'react-router-dom'

function RecipeCard({ recipeId, title, image, course }) {
  return (
    <Link to={`/recipes/${recipeId}`} className="recipeCard">
      <h3 className="header">{title}</h3>
      <h5>{course}</h5>
      <img src={image} alt={name} className="recipeImage" />
    </Link>
  )
}

export default RecipeCard