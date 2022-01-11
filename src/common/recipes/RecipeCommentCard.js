import { isOwner } from '../../lib/auth'

function RecipesCommentCard({  text, addedBy, handleDelete }) {
  return (
    <div className="comment-box">
      <div className="comment-content">
        <p className="comment-user">
          <strong>{addedBy.username}</strong>
          <br />
        </p>
        <p>
          {text}
        </p>
      </div>
      {isOwner(addedBy._id) &&
              <button className="comment-delete-button" onClick={handleDelete}><i className="bi bi-trash"></i></button>}
    </div>
  
  )
}

export default RecipesCommentCard