import "./blogs.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = "https://dummyjson.com/posts";
async function fetchBlogs() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}

async function Blogs() {
  const blogs = await fetchBlogs();

  return (
    <div className="main-blogs max-width padding__top__bottom" id="main__blogs">
      <section className="section-blogs">
        <div className="section_heading">
          <img src="/assets/chevron-left.85606530.svg" alt="breadcrums-arrow" />
          <h1 className="section_name">Blogs</h1>
        </div>
        <ul className="blogs">
          {blogs.map((blog) => (
            <li className="blog" key={blog.id}>
              <h4 className="blog__title">{blog.title}</h4>
              <p className="blog__desc">{blog.body}</p>
              <div className="blog__tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog__reactions">
                <p>{blog.reactions.likes} like</p>
                <p>{blog.reactions.dislikes} dislikes</p>
              </div>
              <div className="blog__button btn">
                <a href={`/blogs/${blog.id}`} className="btn">
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// export as a protected route
export default withPageAuthRequired(Blogs, { returnTo: "/blogs" });
