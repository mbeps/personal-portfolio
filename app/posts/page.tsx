import getPostMetadata from "@/actions/getPostMetadata";
import Title from "@/components/Content/Text/Title";
import PostItem from "@/components/Posts/PostItem";

/**
 * Displays a list of all posts that can be opened.
 * @returns (JSX.Element): page with all posts
 */
export default function Posts() {
  const postMetadata = getPostMetadata();

  return (
    <main>
      <section id="posts">
        <div className="my-12 pb-12 md:pt-8 md:pb-48">
          <Title title="Posts" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 ">
            {postMetadata ? (
              postMetadata.map((post) => <PostItem key={post.slug} {...post} />)
            ) : (
              <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">No posts</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
