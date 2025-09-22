import React from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.userId} {...post} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 20),
    },
  };
};

export default PostsPage;
