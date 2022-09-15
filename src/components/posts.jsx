import React,{useState} from "react";

function Posts({posts, addToFavorites, onDeletePosts, removePosts}) {
  const {title, content, author} = posts;
  const [isRead, IsReadSet] = useState(false)

  function deletingClick(e) {
    e.preventDefault();
    fetch(`{"http://localhost:9292"}/${posts}`, {
      method: "DELETE",
    })
    removePosts(posts)
    .then((r) => r.json())
    .then((deletedPosts) => onDeletePosts(deletedPosts));
    removePosts(posts)
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>- By {author}</strong></p>
      <button onClick={() => IsReadSet(!isRead)} >Mark as {isRead ? "unread" : "read" }</button>
      <button onClick={deletingClick} >Delete</button>
      <button onClick={() => addToFavorites(posts)}>{posts.isFavorite ? "Unfavorite" : "♥ Favorite" }</button>
    </div>
  );
}

export default Posts;
