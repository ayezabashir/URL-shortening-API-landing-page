import BlogTemplate from "../components/BlogTemplate";
import ResourcesBlog from "../components/ResourcesBlog";
import herobg from "/resource_hero.png";
import blog1 from "/recentpost1.png";
import blog2 from "/recentpost2.png";
import blog3 from "/recentpost3.png";

const blogs = [
  {
    blogimage: blog2,
    blog_cat: "Websites",
    blog_title: "Websites Building Strategies That Work",
  },
  {
    blogimage: blog1,
    blog_cat: "Mobile",
    blog_title: "Tools for Campaigns: Connect, Track, Optimize",
  },
  {
    blogimage: blog3,
    blog_cat: "Branding",
    blog_title: "App Landing Page Design Tips for More Installs",
  },
];
const Resources = () => {
  return (
    <>
      <BlogTemplate
        fromColor="#FFBF3C"
        toColor="#f7f4ee"
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
