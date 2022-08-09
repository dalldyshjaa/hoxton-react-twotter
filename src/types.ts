export type user = {
  id: number;
  username: string;
  profile: string;
};
export type PostType = {
  id: number;
  textContent?: string;
  postImg?: string;
  likes: number;
  replies: number;
  retweets: number;
  author: string;
  authorId: number;
};
export type Comment = {
  id: number;
  body: string;
  commentAuthor: string;
  authorId: number;
  postId: number;
};
