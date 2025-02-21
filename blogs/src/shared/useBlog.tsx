import { useContext } from "react";
import { Blogcontext } from "./BlogContext";

const useBlog = () => {
    const context = useContext(Blogcontext);
    if(!context){
      throw new Error('context must provider')
    }
    return context;
  }
  
  export default useBlog;