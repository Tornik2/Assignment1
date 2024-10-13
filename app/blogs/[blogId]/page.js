import "./blogs.css";
async function fetchBlogPost(blogId) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${blogId}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export default async function BlogDetailsClient({ params }) {
  const { blogId } = params;
  const blog = await fetchBlogPost(blogId);

  if (!blog) {
    return <div className="error">No blog post found.</div>;
  }

  return (
    <article className="blogPost">
      <header className="header">
        <h1 className="title">{blog.title}</h1>
        <div className="meta">
          <span className="views">{blog.views} views</span>
          <span className="userId">Author ID: {blog.userId}</span>
        </div>
      </header>
      <div className="content">
        <p>{blog.body}</p>
      </div>
      <footer className="footer">
        <div className="tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="reactions">
          <span className="likes">👍 {blog.reactions.likes}</span>
          <span className="dislikes">👎 {blog.reactions.dislikes}</span>
        </div>
      </footer>
    </article>
  );
}
