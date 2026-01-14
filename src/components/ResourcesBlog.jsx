const ResourcesBlog = ({ blogimage, blog_cat, blog_title }) => {
  return (
    <section className="flex flex-col items-start sm:flex-row sm:items-center lg:flex-row lg:items-center gap-5 ">
      <img className="w-full sm:w-50 rounded-xl" src={blogimage} alt={blog_title} />
      <div>
        <p className="text-gray mb-2 text-lg">{blog_cat}</p>
        <h3 className="text-2xl font-semibold hover:underline">{blog_title}</h3>
        <button className="font-semibold mt-3 cursor-pointer" type="button">
          Read More
        </button>
      </div>
    </section>
  );
};

export default ResourcesBlog;
