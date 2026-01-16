const BlogTemplate = ({
  class_name,
  primary_bg,
  headingName,
  blogImg,
  logoName,
  subheading,
  description,
  children,
}) => {
  return (
    <div className={`${class_name}`}>
      <div className="lg:max-w-7xl lg:p-8 lg:mx-auto lg:my-0 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center md:h-full">
          <div className={`${primary_bg}`}>
            <div className="p-8 lg:pl-0 md:pr-10 py-10">
              <h1 className="text-4xl font-bold">{headingName}</h1>
              <img className="w-full rounded-3xl my-7" src={blogImg} alt="" />
              <p className="text-lg font-light">{logoName}</p>
              <h2 className="text-3xl font-bold my-2">{subheading}</h2>
              <p className="text-base mt-2">{description}</p>
            </div>
          </div>
          <div className="bg-light-gray">
            <div className="p-8 lg:pr-0 md:pl-10 py-10 md:h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
