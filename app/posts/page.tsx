import getPostMetadata from "@/actions/getPostMetadata";
import PostItem from "@/components/Posts/PostItem";
import Title from "@/components/Title";

export default function Posts() {
  const postMetadata = getPostMetadata();

  return (
    <main>
      <section id="posts">
        <Title title="Posts" />
        {postMetadata.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            {postMetadata.map((post) => (
              <PostItem key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center my-36">
            <h2 className="text-2xl font-bold">No posts</h2>
          </div>
        )}
      </section>
    </main>
  );
}
