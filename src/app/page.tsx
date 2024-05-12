import { BlogCard } from "@/components/blogCard";
import mockData from "@/lib/mockData.json";

export default function Home() {
  return (
    <main className={"mx-auto max-w-[720px] p-4"}>
      <section className={"grid grid-cols-1 gap-4"}>
        {mockData.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
              imgAlt={blog.imgAlt}
            />
          );
        })}
      </section>
    </main>
  );
}
