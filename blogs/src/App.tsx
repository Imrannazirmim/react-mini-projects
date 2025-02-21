import { IoAddCircle } from "react-icons/io5";
import Navigation from "./components/Navigation.tsx";
import PeopleToFollow from "./components/PeopleToFollow.tsx";
import TopicsList from "./components/TopicsList.tsx";
import TrendsList from "./components/TrendsList.tsx";
import { BlogProvider } from "./shared/BlogContext.tsx";
import { useState } from "react";
import { Blog } from "./types.ts";
import Modal from "./components/Modal.tsx";
import BlogForm from "./components/BlogForm.tsx";
import Article from "./components/Article.tsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const handleAddModalBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true)
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true)
  }

  return (
    <div className="w-full h-screen overflow-scroll">
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          {/*    main area*/}
          <section className="mx-auto p-6">
            <div className="mr-[10rem]">
              <button
                onClick={handleAddModalBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 md:mx-auto md:mb-10"
              >
                Add New Blog <IoAddCircle />{" "}
              </button>

              {/* article list */}
              <Article onEdit={openModalForEdit}/>
             
              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm exitingBlog={editingBlog} onClose={() => setIsModalOpen(false)} />
                </Modal>
              ) }
            </div>
          </section>
          <div className="w-[33%] lg:absolute lg:right-10 mb-[10rem] mt-8">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};
export default App;
