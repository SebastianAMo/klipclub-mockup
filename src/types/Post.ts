export interface User {
  name: string;
  avatar: string;
  time: string;
  verified: boolean;
}

export interface Stats {
  likes: number;
  comments: number;
  shares: number;
}

export interface Post {
  id: number;
  user: User;
  content: string;
  images: string[];
  stats: Stats;
}
