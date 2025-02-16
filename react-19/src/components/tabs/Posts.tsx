const Posts = () => {
  const posts = Array.from(
    { length: 100000 },
    (_, index) => `post ${index + 1}`
  );
  return <div>
    {posts.map(post => (
        <li key={post}>{post}</li>
    ))}
  </div>;
};

export default Posts;
