
const blogs = [
    {
      "author": "Alice Johnson",
      "title": "Mastering React Components",
      "likes": 120,
      "comment": "A comprehensive guide to reusable components in React."
    },
    {
      "author": "Bob Smith",
      "title": "Introduction to Tailwind CSS",
      "likes": 95,
      "comment": "Great starting point for beginners in Tailwind CSS."
    },
    {
      "author": "Clara Davis",
      "title": "Full-Stack Development Tips",
      "likes": 150,
      "comment": "Valuable insights into handling both frontend and backend efficiently."
    },
    {
      "author": "David Lee",
      "title": "State Management in React",
      "likes": 180,
      "comment": "Explains complex state management with practical examples."
    },
    {
      "author": "Ella Brown",
      "title": "Deploying Web Apps on Ubuntu",
      "likes": 75,
      "comment": "Simple guide for deploying web apps on Ubuntu servers."
    },
    {
      "author": "Frank Miller",
      "title": "React Hooks: A Deep Dive",
      "likes": 130,
      "comment": "Covers advanced concepts of React hooks with code samples."
    },
    {
      "author": "Grace Wilson",
      "title": "Styling in React with Tailwind CSS",
      "likes": 105,
      "comment": "Combines React and Tailwind CSS for beautiful UIs."
    },
    {
      "author": "Henry Clark",
      "title": "Building REST APIs with Node.js",
      "likes": 200,
      "comment": "Step-by-step process for creating robust REST APIs."
    },
    {
      "author": "Isla Martinez",
      "title": "Authentication in Full-Stack Apps",
      "likes": 160,
      "comment": "Covers authentication best practices using JWT and OAuth."
    },
    {
      "author": "Jack Lewis",
      "title": "Optimizing React Performance",
      "likes": 140,
      "comment": "Discusses performance tuning techniques for React applications."
    }
  ]
  

const PopularBlog = () => {
  return <div className="lg:w-[25%] lg:relative lg:top-[21rem] md:w-[60%] md:ml-[14rem] sm:w-[50%] sm:ml-[18rem]   mt-[2.4rem] border rounded mb-10 border-gray-300 font-[poppins] ">
    <ul className="flex flex-col flex-wrap gap-5">
        <h1 className="text-2xl font-semibold m-[2rem]  text-gray-800 ">Popular Blogs</h1>
        {blogs.map((blog, index) => (
            <li key={index} className="shadow rouned">
                <div className="p-4 rounded">
                    <h2 className="text-xl font-semibold text-gray-800">{blog.author}</h2>
                    <span className="font-semibold text-gray-600">{blog.title}</span>
                   <div className="flex flex-col gap-2 mt-2">
                   <span className="font-semibold text-gray-700">Likes: {blog.likes}</span>
                   <p className="text-gray-700 font-medium"><span className="font-semibold text-blue-600">Comments: </span> {blog.comment}</p>
                   </div>
                </div>
            </li>
        ))}
    </ul>
  </div>;
};

export default PopularBlog;
