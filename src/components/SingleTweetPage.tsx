import { Header } from "./Header";
import { PostType, user } from "../types";
import { SingleTweet } from "./SingleTweet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
type Props = {
  user: user;
};

export function SingleTweetPage({ user }: Props) {
  const params = useParams();
  const [author, setAuthor] = useState({});
  const [tweet, setTweet] = useState({});

  useEffect(function () {
    fetch(`http://localhost:3006/profiles/?username=${params.username}`)
      .then((resp) => resp.json())
      .then((author) => setAuthor(author[0]));
    fetch(`http://localhost:3006/posts/?id=${params.postId}`)
      .then((resp) => resp.json())
      .then((tweet) => setTweet(tweet[0]));
  }, []);
  return (
    <>
      <Header user={user} />
      <main className="overflow-y-scroll main-container">
        <main className="w-[600px] h-[120vh]  border-[0.5px] border-[#e7e7e8ba] relative">
          <SingleTweet author={author} tweet={tweet} />
        </main>
      </main>
    </>
  );
}
