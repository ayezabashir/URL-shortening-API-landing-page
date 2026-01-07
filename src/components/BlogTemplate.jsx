const BlogTemplate = ({
  fromColor,
  toColor,
  headingName,
  blogImg,
  logoName,
  subheading,
  children,
}) => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor} 0%, ${fromColor} 50%, ${toColor} 50%, ${toColor} 100%)`,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="px-5 py-10">
            <h1 className="text-4xl font-bold">{headingName}</h1>
            <img className="w-full h-50 object-cover" src={blogImg} alt="" />
            <p>{logoName}</p>
            <h2>{subheading}</h2>
          </div>
          <div className="px-5 py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
