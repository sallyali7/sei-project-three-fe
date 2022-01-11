import { isOwner } from '../../lib/auth'

function RecipesCommentCard({  text, addedBy, handleDelete }) {
  return (
    <div className="comment-box">
      <div className="comment-content">
        <p>
          <strong>{addedBy.username}</strong>
          <br />
          {text}
        </p>
        {isOwner(addedBy._id) &&
              <button className="comment-button" onClick={handleDelete}>X</button>}
      </div>
    </div>
  
  )
}

export default RecipesCommentCard