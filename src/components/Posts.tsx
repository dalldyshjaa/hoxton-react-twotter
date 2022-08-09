import { Post } from "./Post";
import { PostType } from "../types";
import { useEffect, useState } from "react";

export function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3006/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);
  return (
    <>
      {posts.length
        ? posts.map((post: PostType) => <Post post={post} key={post.id} />)
        : null}
    </>
  );
}
