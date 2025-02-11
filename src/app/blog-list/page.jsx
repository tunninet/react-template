import Wrapper from "@/layout/wrapper";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Blog List - Softec",
};

const BlogListPage = () => {
  return (
    <Wrapper>
      <BlogList />
    </Wrapper>
  );
};

export default BlogListPage;
