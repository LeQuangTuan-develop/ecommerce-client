const BlogCard = ({ post, substring = 80 }) => {
  const { image, title, description, date, link, categories } = post
  return (
    <div className="blog__card">
      <div className="blog__tags">
        {categories?.map((c, i) => (
          <a href="/" key={i}>
            {c}
          </a>
        ))}
      </div>
      <div className="blog__card--header">
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="blog__card--body">
        <a href={link}>{title.substring(0, 50)}</a>
        <p>{description.substring(0, substring)}...</p>
      </div>
      <div className="blog__card--footer">
        <a href={link}>Xem tiếp</a>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default BlogCard