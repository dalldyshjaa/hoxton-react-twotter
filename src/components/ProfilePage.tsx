import { user } from "../types";
import { Header } from "./Header";
import { GoBack } from "./Icons";
import { UserTweets } from "./UserTweets";
type Props = {
  user: user;
};

export function ProfilePage({ user }: Props) {
  return (
    <>
      <Header user={user} />
      <main className="overflow-y-scroll main-container">
        <main className="w-[600px] h-[120vh]  border-[0.5px] border-[#e7e7e8ba] relative">
          <div className="h-12 w-full mt-[-2px] px-3 grid items-center fixed bg-white z-30">
            <div
              className="w-[20px] grid grid-flow-col items-center bg-white gap-6 z-30"
              onClick={() => {
                history.back();
              }}
            >
              <GoBack />
              <span className="font-roboto text-[20px]">{user.username}</span>
            </div>
          </div>
          <div className="w-full min-h-32 bg-headerPrimary relative mt-12">
            <img
              src="https://pbs.twimg.com/profile_banners/1252637926527242241/1643721020/1080x360"
              alt=""
              className="w-full"
            />
            <img
              src={user.profile}
              alt=""
              className="w-[133px] h-[133px] rounded-full absolute border-[4.5px] border-[#ffffff] ml-3 mt-[-60px]"
            />
          </div>
          <div className="w-full  mt-16 px-4 pt-[15px] border-b border-[#e7e7e8ba]">
            <span className="font-roboto text-[22px] ">{user.username}</span>
            <span className="block text-[#717171] mt-[-8px]">
              @{user.username}
            </span>
            <div className="w-full h-8  mt-8 grid grid-flow-col items-center justify-start gap-6">
              <span className="hover:underline">
                <strong>532</strong> Following
              </span>
              <span className="hover:underline">
                <strong>532</strong> Followers
              </span>
            </div>
            <div className="w-full h-14  mt-6 grid grid-flow-col grid-cols-4">
              <button className="font-roboto hover:bg-[#e6e5e5] transition">
                Tweets
              </button>
              <button className="font-roboto hover:bg-[#e6e5e5] transition">
                Tweets&Replies
              </button>
              <button className="font-roboto hover:bg-[#e6e5e5] transition">
                Media
              </button>
              <button className="font-roboto hover:bg-[#e6e5e5] transition">
                Likes
              </button>
            </div>
          </div>
          <div>
            <UserTweets user={user} />
          </div>
        </main>
      </main>
    </>
  );
}
