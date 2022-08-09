import { useEffect, useState } from "react";
import { Comment } from "../types";
import { SingleTweetReply } from "./SingleTweetReply";

type Props = {
  tweet: Comment;
};

export function TweetReplies({ tweet }: Props) {
  const [replies, setReplies] = useState([]);
  //   const [tweet, setTweet] = useState(tweet);
  useEffect(
    function () {
      fetch(`http://localhost:3006/comments?postId=${tweet.id}`)
        .then((resp) => resp.json())
        .then((repliesFromServer) => {
          setReplies(repliesFromServer);
        });
    },
    [tweet]
  );
  return tweet === undefined
    ? null
    : replies.map((reply) => <SingleTweetReply reply={reply} key={reply.id} />);
}
