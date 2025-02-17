import { useState } from "react";

interface ProjectType {
  key: number;
  title: string;
  thumbnail: string;
  video_embed: string;
  description: string;
}

const Project = ({
  title,
  thumbnail,
  description,
  video_embed,
}: ProjectType) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-wrap gap-2">
      <div className="w-[20rem] h-[28rem] m-2 p-2 shadow">
        {!isPlaying ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
        ) : (
          <iframe
            className="w-full h-64"
            src={video_embed}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className="flex flex-col gap-3 mt-2 p-2">
          <span className="font-medium">{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Project;
