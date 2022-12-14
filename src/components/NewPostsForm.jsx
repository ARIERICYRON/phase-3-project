import React, {useState} from "react";


function NewPostsForm({onAddPosts}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: author
      }),
    })
      .then((r) => r.json())
      .then((newPosts) => onAddPosts(newPosts));

    setTitle("");
    setContent("");
    setAuthor("");
  }

  return (
    <form className="new-posts-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea 
        placeholder="Write your masterpiece here..." 
        rows={10} 
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Share your masterpiece" 
      />
    </form>
  );
}


export default NewPostsForm;
