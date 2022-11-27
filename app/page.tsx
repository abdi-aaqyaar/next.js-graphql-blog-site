import BlogPosts from "components/Blogs/BlogPosts";
import { getPosts } from "services/api";

export default async function Home() {
  const { data } = await getPosts();
  return (
    <div className="container my-5">
      <BlogPosts posts={data} />
    </div>
  );
}
