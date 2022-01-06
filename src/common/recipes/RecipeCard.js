// import react from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ recipeId, title, image, course, calories, carbs, fats, protein, prepTime, preparation, ingredients  }) {
  return (
    <div>
      <Link to={`/recipes/${recipeId}`}>
        <h3 className="header">
          {title}      
        </h3>
        <h5>{course}</h5>
        <h5>{prepTime} </h5>
        <div className="card-image">
          <figure className="card-image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">        
          <h5>{calories}</h5>
          <h5>{protein}</h5>
          <h5>{carbs}</h5>
          <h5>{fats}</h5>
          <h5>{ingredients}</h5>
          <h5>{preparation}</h5>

        </div>
      </Link>
    </div>
  )
}

export default RecipeCard