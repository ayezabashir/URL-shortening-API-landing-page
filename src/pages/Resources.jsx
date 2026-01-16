import BlogTemplate from "../components/BlogTemplate";
import ResourcesBlog from "../components/ResourcesBlog";
import herobg from "/resource_hero.png";
import { blogs } from "../data/articles-data.json";
const Resources = () => {
  return (
    <>
      <BlogTemplate
        headingName="Shortly Blog"
        blogImg={herobg}
        logoName="URL SHORTENING"
        subheading="How to utilise Shortly to Your Link Management Workflows"
        description="Transform your link management with shortly, stay focused, and simplify your workflows."
      >
        <h2 className="text-3xl font-bold mb-5">Recent Posts</h2>
        <div className="flex flex-col gap-10">
          {blogs.map((blog, index) => (
            <ResourcesBlog
              key={index}
              blogimage={blog.blogimage}
              blog_cat={blog.blog_cat}
              blog_title={blog.blog_title}
            />
          ))}
        </div>
      </BlogTemplate>
      <ResourcesBlog />
    </>
  );
};

export default Resources;
