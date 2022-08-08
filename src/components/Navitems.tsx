import { Link } from "react-router-dom";
import {
  BookmarksIcon,
  CommunityIcon,
  ExploreIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "./Icons";

export function Navitems() {
  return (
    <nav>
      <Link to="/home" className="py-1 h-[50px] w-full ">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="what grid place-items-center">
            <HomeIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Home</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <ExploreIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Explore</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3  rounded-full nav-link">
          <div className="grid place-items-center">
            <CommunityIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] h-full">
            Communities
          </div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <NotificationsIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Notifications</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <MessagesIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Messages</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <BookmarksIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Bookmarks</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <ProfileIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">Profile</div>
        </div>
      </Link>
      <Link to="/home" className="py-1 h-[50px] w-full">
        <div className="grid grid-flow-col h-[50px]  p-3 rounded-full nav-link">
          <div className="grid place-items-center">
            <MoreIcon />
          </div>
          <div className="ml-5 mr-4 font-sans text-[22px] ">More</div>
        </div>
      </Link>
    </nav>
  );
}
