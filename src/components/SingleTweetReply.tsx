import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, MoreDots } from "./Icons";

import { Comment } from "../types";
import { useEffect, useState } from "react";
type Props = {
  reply: Comment;
};

export function SingleTweetReply({ reply }: Props) {
  const [replyAuthor, setReplyAuthor] = useState({});
  useEffect(function () {
    fetch(`http://localhost:3006/profiles?id=${reply.authorId}`)
      .then((resp) => resp.json())
      .then((author) => setReplyAuthor(author[0]));
  }, []);
  return (
    <div className="w-full p-3 border-b-[1px] border-[#e7e7e8ba] hover:bg-[#f7f7f7] cursor-pointer">
      <div className="w-full  grid grid-flow-col grid-cols-[auto_1fr] gap-3">
        <div className="">
          <img
            src={replyAuthor.profile !== undefined ? replyAuthor.profile : null}
            alt=""
            className="h-[48px] w-[48px] rounded-full"
          />
        </div>
        <div>
          <div className="grid grid-flow-col just-between grid-cols-[1fr_auto]">
            <div>
              <span className="font-roboto ">
                {replyAuthor !== undefined && replyAuthor.username}
              </span>
              <span className="text-[#6d6d6fba] font-mono cursor-pointer ml-1">
                @{replyAuthor !== undefined && replyAuthor.username}
              </span>
            </div>
            <div>
              <MoreDots />
            </div>
          </div>
          {reply.body && <div>{reply.body}</div>}
          {reply.imageReply && (
            <div className="mt-2 ">
              <img
                src={reply.imageReply}
                alt=""
                className="w-[450px] rounded-lg border border-[#e7e7e8ba]"
              />
            </div>
          )}
          <div>
            <div className="h-6 ">
              <div className="grid grid-flow-col justify-between mt-[12px] pb-3 mr-16  ">
                <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer reply-icon-container">
                  <ReplyIcon />
                  <span>{reply.replies}</span>
                </div>
                <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer retweet-icon-container">
                  <RetweetIcon />
                  <span>{reply.retweets}</span>
                </div>
                <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer like-icon-container">
                  <LikeIcon />
                  <span>{reply.likes}</span>
                </div>
                <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer share-icon-container">
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
