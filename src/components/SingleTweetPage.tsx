import { Header } from "./Header";
import { user } from "../types";
import { SingleTweet } from "./SingleTweet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoBack } from "./Icons";
import { SingleTweetReply } from "./SingleTweetReply";
import { TweetReplies } from "./TweetReplies";
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
        <main className="w-[600px] min-h-screen border-[0.5px] border-[#e7e7e8ba] relative">
          <div className="h-12  px-3 grid items-center">
            <div
              className="w-[20px]"
              onClick={() => {
                history.back();
              }}
            >
              <GoBack />
            </div>
          </div>
          <SingleTweet author={author} tweet={tweet} />
          <TweetReplies tweet={tweet} />
        </main>
      </main>
    </>
  );
}
