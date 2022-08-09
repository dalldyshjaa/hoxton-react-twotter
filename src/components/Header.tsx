import { Link } from "react-router-dom";
import { MoreDots, TwitterLogo } from "./Icons";
import { Navitems } from "./Navitems";
import { user } from "../types";
type Props = {
  user: user;
};

export function Header({ user }: Props) {
  return (
    <header className="grid  px-[12px] w-[251px] h-[100vh] sticky">
      <div className="what grid  ">
        <div className="w-full ">
          <div className="logo-container h-[52px]">
            <Link
              to="/home"
              className="w-[50px] h-[50px] grid place-items-center rounded-full hover:bg-[#e8f5fd] cursor-pointer"
            >
              <TwitterLogo />
            </Link>
          </div>
          <Navitems />
          <Link
            to="adsa"
            className="grid place-items-center my-4 mt-8 h-12 w-[90%] bg-headerPrimary rounded-full text-center hover:bg-[#1a8cd8]"
          >
            <div className=" ">
              <span className=" text-white font-roboto font-bold tracking-wide">
                Tweet
              </span>
            </div>
          </Link>
        </div>
        <div className="  w-full h-16  rounded-full my-3 hover:bg-[#e7e7e8] cursor-pointer">
          <div className="p-3 h-full grid grid-flow-col">
            <div>
              <img
                src={`${user.profile}`}
                alt=""
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div>
              <div className="grid align-items-center mr-3">
                <span className="text-[14px] font-bold">{user.username}</span>
                <span className="text-[14px] ">@{user.username}</span>
              </div>
            </div>
            <div className="w-full grid place-items-center">
              <MoreDots />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
