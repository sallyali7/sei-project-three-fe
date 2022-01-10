import { Link } from 'react-router-dom'

function RecipeCard({ recipeId, title, image, course }) {
  return (
    <section>
      <div className="card recipes">
        <div className="card-body recipes">
          <h5 className="card-title recipes">{title}</h5>
          <p className="card-text recipes">{course}</p>
        </div>
        <Link to={`/recipes/${recipeId}`}>
          <img src={image} className="card-img-top recipes" alt={title}/>
        </Link>
      </div>
    </section>
  )
}

export default RecipeCard

