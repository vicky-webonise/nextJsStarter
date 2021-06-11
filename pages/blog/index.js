import PageTitle from "../../components/PageTitle";
import Hero from "../../components/Hero";
import BlogCard from "../../components/BlogCard";

export default function Blog({ data }) {
  console.log(data);

  return (
    <>
      <PageTitle title="Blog Page" />
      <Hero heroTitle="Blog Banner text" bannerUrl="banner3" />
      <h1>Blog</h1>
      <p>
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis qui aperiam non debitis possimus qui neque nisi nulla
      </p>
      <div className="row">
        {data.map((post) => {
          return <BlogCard key={post.id} postList={post} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
