export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  wallPosts: {
    posts: Post[];
    moreAvailable: boolean;
  };
  profile: Profile;
}

export interface Profile {
  displayName: string;
  about?: string;
  imageURL?: string;
  interests?: string;
  coverImageURL?: string;
  location?: string;
  workPlace?: string;
}

export interface Post {
  id: number;
  title: string;
  imageURL?: string;
  createdAt: string;
  updatedAt: string;
  liked: boolean;
  author: User;
  comments: {
    comments: Comment[];
    moreAvailable: boolean;
  };
  likes: Like[];
}

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  post: Post;
}

export interface Like {
  id: number;
  createdAt: string;
  updatedAt: string;
  liker: User;
  post: Post;
}

export interface Notification {
  id: number;
  title?: string;
  text?: string;
  type: "success" | "warning" | "error";
}
