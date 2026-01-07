import { useEffect, useState } from "react";

const BlogTemplate = ({
  fromColor,
  toColor,
  headingName,
  blogImg,
  logoName,
  subheading,
  description,
  children,
}) => {
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: isMd
          ? `linear-gradient(to right, ${fromColor} 50%, ${toColor} 50%)`
          : `linear-gradient(to bottom, ${fromColor} 50%, ${toColor} 50%)`,
      }}
    >
      <div className="container h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-1/2 md:h-full">
          <div className="md:pr-10 py-10">
            <h1 className="text-4xl font-bold">{headingName}</h1>
            <img className="w-full rounded-3xl my-7" src={blogImg} alt="" />
            <p className="text-lg font-light">{logoName}</p>
            <h2 className="text-3xl font-bold my-2">{subheading}</h2>
            <p className="text-base mt-2">{description}</p>
          </div>
          <div className="md:pl-10 py-10 h-1/2 md:h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
