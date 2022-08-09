import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "./Icons";

export function Post() {
  let textContent = false;
  let postImg = true;
  return (
    <article className="grid grid-flow-col grid-cols-[auto_1fr] gap-2 w-full  border-y border-[#e7e7e8ba] px-4 py-3 hover:bg-[#f7f7f7]">
      <div>
        <img
          src="https://images.pexels.com/photos/12791096/pexels-photo-12791096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div>
        <div>
          <div className="pt-1">
            <span className="font-roboto pr-1">dalldyshjaa</span>
            <span className="text-[#828080]">@dalldyshjaa</span>
          </div>
          {textContent ? (
            <span className="grid max-w-[512px] overflow-hidden post-text-content">{`asdafsafgsahfsafhsafsafhsafsgaffasdafafsafsafasdafsafgsahfsafhsafsafhsafsgaffasdafafsafsafasdafsafgsahfsafhsafsafhsafsgaffasdafafsafsaf`}</span>
          ) : null}
          {postImg ? (
            <div className="max-w-[512px] mt-2 border-[1px] border-[#e7e7e8ba] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/12791096/pexels-photo-12791096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-[512px] "
              />
            </div>
          ) : null}
          <div className="grid grid-flow-col justify-between mt-4 mr-14">
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer reply-icon-container">
              <ReplyIcon />
              <span>3</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer retweet-icon-container">
              <RetweetIcon />
              <span>3</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer like-icon-container">
              <LikeIcon />
              <span>3</span>
            </div>
            <div className="grid grid-flow-col items-center gap-[10px] cursor-pointer share-icon-container">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
