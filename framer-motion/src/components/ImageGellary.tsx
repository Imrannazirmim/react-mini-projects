import {motion} from 'framer-motion'

const images = [
  {
    title: "Nature Beauty",
    image_url:
      "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Urban Landscape",
    image_url:
      "https://images.unsplash.com/photo-1598755257428-e7533d2f8771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGQlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Ocean Waves",
    image_url:
      "https://images.unsplash.com/photo-1502517362993-96fc441e4831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdpbGQlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D",
  },
];

const ImageGellary = () => {
  return (
    <div className="w-[90%] flex">
      <div className="flex justify-center items-center">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg m-[1rem]"
           whileHover={{scale: 1.05}}
           transition={{type: 'spring', stiffness: 300}}
          >
            <img
              src={image.image_url}
              alt={image.title}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              {image.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGellary;
