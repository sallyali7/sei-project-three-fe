import { isOwner } from '../../lib/auth'

function RecipesCommentCard({  content, user, handleDelete }) {
  return (
    <div className="comment-box">
      <div className="comment-content">
        <p>
          <strong>{user.username}</strong>
          <br />
          {content}
        </p>
        {isOwner(user._id) &&
              <button className="comment-button" onClick={handleDelete}>X</button>}
      </div>
    </div>
  
  )
}

export default RecipesCommentCard