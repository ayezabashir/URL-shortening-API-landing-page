import BlogTemplate from "../components/BlogTemplate";
import ResourcesBlog from "../components/ResourcesBlog";
import herobg from "/resource_hero.png"

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
      ></BlogTemplate>
      <ResourcesBlog />
    </>
  );
}

export default Resources