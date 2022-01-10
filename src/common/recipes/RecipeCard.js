import { Link } from 'react-router-dom'

function RecipeCard({ recipeId, title, image, course }) {
  return (
    <section>
      <div className="card">
        <Link to={`/recipes/${recipeId}`}>
          <div className="card-img-top">
            <img src={image} alt={name}/>
          </div>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-text">{course}</h5>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default RecipeCard