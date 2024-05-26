export interface ProfileType {
  id: number;
  bio: string;
  profileImageUrl: string;
  userId: number;
  user: UserType;
}
export interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
  posts: PostType[];
  profile: ProfileType;
}

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  authorId: number;
  author: UserType;
}
