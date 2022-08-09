import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "./Icons";
import { PostType, user } from "../types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
type Props = {
  post: PostType;
};

export function Post({ post }: Props) {
  // let location = useLocation();
  // console.log(location);
  const [postAuthor, setPostAuthor] = useState<user | any>([]);

  useEffect(function () {
    fetch(`http://localhost:3006/profiles/${post.authorId}`)
      .then((resp) => resp.json())
      .then((author) => setPostAuthor(author));
  }, []);

  return (
    <Link
      to={`/${postAuthor.username}/${post.id}`}
      className="grid grid-flow-col grid-cols-[auto_1fr] gap-2 w-full border-b-[0.5px] border-[#e7e7e8ba] px-4 py-3 hover:bg-[#f7f7f7] cursor-pointer"
    >
      <div>
        <img
          src={
            postAuthor.profile ||
            `https://images.pexels.com/photos/12791096/pexels-photo-12791096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
          }
          alt=""
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div>
        <div>
          <div className="pt-1">
            <span className="font-roboto pr-1">{postAuthor.username}</span>
            <span className="text-[#828080]">@{postAuthor.username}</span>
          </div>
          {post.textContent ? (
            <span className="grid max-w-[512px] overflow-hidden post-text-content">
              {post.textContent}
            </span>
          ) : null}
          {post.postImg ? (
            <div className="max-w-[512px] mt-2 border-[1px] border-[#e7e7e8ba] rounded-lg overflow-hidden">
              <img src={post.postImg} alt="" className="w-[512px] " />
            </div>
          ) : null}
          <div className="grid grid-flow-col justify-between mt-[12px] mr-14 ml-[-8px]">
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer reply-icon-container">
              <ReplyIcon />
              <span>{post.replies}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer retweet-icon-container">
              <RetweetIcon />
              <span>{post.retweets}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer like-icon-container">
              <LikeIcon />
              <span>{post.likes}</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer share-icon-container">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
