import { useState, useEffect } from "react";
import { PostType, user } from "../types";
import { Post } from "./Post";

type Props = {
  user: user;
};

export function UserTweets({ user }: Props) {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3006/posts?authorId=${user.id}`)
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
