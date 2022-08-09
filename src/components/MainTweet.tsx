import { useState } from "react";
import { user } from "../types";
import {
  EmojiIcon,
  GifIcon,
  MediaImgIcon,
  PollIcon,
  ScheduleIcon,
} from "./Icons";
type Props = {
  user: user;
};

function handleSubmit(text: string, user: user) {
  let tweet = {
    textContent: `${text}`,
    author: `${user.username}`,
    likes: 0,
    replies: 0,
    retweets: 0,
    authorId: user.id,
  };
  if (text !== "") {
    fetch("http://localhost:3006/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweet),
    });
  }
}
export function MainTweet({ user }: Props) {
  const [buttonAccesibility, setButtonAccesibility] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.target.text.value, user);
        e.target.text.reset();
      }}
      className="grid grid-flow-col grid-cols-[auto_1fr] h-[120px] w-full mt-[56px] place-items-start px-3 gap-3 border-b-[0.5px] border-[#e7e7e8ba] "
    >
      <div>
        <img src={user.profile} alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="h-full w-full grid grid-rows-[1fr_1fr] items-center">
        <input
          name="text"
          placeholder="What's happening?"
          className="font-sans text-[17px] text-[#5C6D79] pb-3 font-[500] outline-none"
        />

        <div className="grid grid-flow-col justify-between pb-3 items-center">
          <div className="grid grid-flow-col gap-4">
            <div>
              <MediaImgIcon />
            </div>
            <div>
              <GifIcon />
            </div>
            <div>
              <PollIcon />
            </div>
            <div>
              <EmojiIcon />
            </div>
            <div>
              <ScheduleIcon />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" bg-headerPrimary text-white font-roboto py-2 px-4 rounded-full cursor-pointer "
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
