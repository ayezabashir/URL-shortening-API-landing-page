import BlogTemplate from "../components/BlogTemplate";
import ResourcesBlog from "../components/ResourcesBlog";
import herobg from "/resource_hero.png";
import { blogs, articles } from "../data/articles-data.json";
import ArticlesCard from "../components/ArticlesCard";
import { useState } from "react";
const Resources = () => {
  const [currArticles, setCurrArticles] = useState(6);
  const handleMoreArticles = () => {
    setCurrArticles((prev) => Math.min(prev + 3, articles.length));
  };
  return (
    <>
      <BlogTemplate
        class_name="blog_template"
        primary_bg="bg-blue"
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
      <section className="container">
        <h3 className="text-4xl my-7 font-extrabold">More Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.slice(0, currArticles).map((article) => (
            <ArticlesCard
              key={article.id}
              arti_image={article.image}
              arti_category={article.category}
              arti_title={article.title}
              arti_desc={article.description}
            />
          ))}
        </div>
        <div className="flex justify-center items-center my-5">
          <button
            onClick={handleMoreArticles}
            className={`bg-blue text-black py-2 px-3 text-lg outline-0 ${
              currArticles >= articles.length
                ? "bg-blue/50 pointer-events-none"
                : "cursor-pointer"
            }`}
          >
            {currArticles === articles.length
              ? "No More Articles"
              : "Show More"}
          </button>
        </div>
      </section>
      <BlogTemplate
        class_name="article_template"
        primary_bg="bg-red"
        blogImg={herobg}
      >
        <h4 className="text-lg font-semibold text-gray">New Report</h4>
        <h5 className="text-5xl font-extrabold mb-5 text-black leading-snug">
          Get the Latest QR Code Insights From Marketers Like You
        </h5>
        <button
          type="button"
          className="bg-purple text-white px-3 py-5 w-52 cursor-pointer text-xl font-semibold capitalize rounded-2xl"
        >
          See the report
        </button>
      </BlogTemplate>
    </>
  );
};

export default Resources;
