import { useState, useEffect } from "react";
import { PostType, user } from "../types";
import { MoreDots, ReplyIcon, RetweetIcon, LikeIcon, ShareIcon } from "./Icons";

type Props = {
  author: user;
  tweet: PostType;
};

export function SingleTweet({ author, tweet }: Props) {
  return (
    <div>
      <div className="  w-full h-16   my-3  cursor-pointer">
        <div className="p-3 h-full grid grid-flow-col grid-cols-[auto_auto_1fr] justify-items-end gap-3">
          <div>
            <img
              src={author.profile}
              alt=""
              className="h-14 w-14 rounded-full"
            />
          </div>
          <div>
            <div className="grid align-items-center mr-3">
              <span className="text-[14px] font-bold">{author.username}</span>
              <span className="text-[14px] ">@{author.username}</span>
            </div>
          </div>
          <div className="w-full grid items-center place-items-end">
            <MoreDots />
          </div>
        </div>
      </div>
      {tweet.textContent && (
        <>
          <div className="w-full   px-3 mt-4">
            <div className="font-sans text-[20px]">{tweet.textContent}</div>
          </div>
        </>
      )}
      {tweet.postImg && (
        <>
          <div className="w-full mt-2 px-3  overflow-hidden">
            <img
              src={tweet.postImg}
              alt=""
              className="w-full border-[1px] border-[#e7e7e8ba] rounded-lg "
            />
          </div>
        </>
      )}
      <div className="w-full   px-3 mt-6 ">
        <div className="grid grid-flow-col justify-start gap-8 items-center w-full h-12 border-y-[1px] border-[#e7e7e8ba] px-2">
          <>
            <div className="hover:underline">
              {/* <span className=" font-bold">3</span> */}
              <span className="ml-[5px] text-[#5d5d5dba]">
                <strong className="text-[#000000]">{tweet.retweets} </strong>
                Retweets
              </span>
            </div>
          </>
          <>
            <div className="hover:underline">
              {/* <span className=" font-bold">3</span> */}
              <span className="ml-[5px] text-[#5d5d5dba]">
                <strong className="text-[#000000]">{tweet.replies} </strong>
                Replies
              </span>
            </div>
          </>
          <>
            <div className="hover:underline">
              {/* <span className=" font-bold">3</span> */}
              <span className="ml-[5px] text-[#5d5d5dba]">
                <strong className="text-[#000000]">{tweet.likes} </strong>
                Likes
              </span>
            </div>
          </>
        </div>
      </div>
      <div className="px-3">
        <div className=" border-b-[1px] border-[#e7e7e8ba] h-12 ">
          <div className="grid grid-flow-col justify-evenly mt-[12px]  ">
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer reply-icon-container">
              <ReplyIcon />
              <span>{tweet.replies}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer retweet-icon-container">
              <RetweetIcon />
              <span>{tweet.retweets}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer like-icon-container">
              <LikeIcon />
              <span>{tweet.likes}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer share-icon-container">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
