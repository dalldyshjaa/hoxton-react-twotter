import { MainTweet } from "./MainTweet";
import { user } from "../types";
import { Post } from "./Post";
import { Posts } from "./Posts";
type Props = {
  user: user;
};

export function Main({ user }: Props) {
  return (
    <main className="w-[600px] h-[120vh]  border-[0.5px] border-[#e7e7e8ba] relative">
      <div className="grid grid-flow-col justify-between px-4 h-14 bg-white place-content-center cursor-pointer w-[598.5px] fixed">
        <h1 className="font-bold font-roboto text-xl">Home</h1>
      </div>
      <MainTweet user={user} />
      <Posts />
    </main>
  );
}
