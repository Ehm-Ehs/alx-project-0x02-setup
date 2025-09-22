import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => (
  <div className="border p-4 rounded mb-2">
    <h3 className="font-bold">{title}</h3>
    <p>{body}</p>
    <span className="text-sm text-gray-500">User: {userId}</span>
  </div>
);

export default PostCard;
