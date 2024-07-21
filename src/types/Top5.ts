export interface Top5Item {
  position: number;
  name: string;
  avatar: string;
  score: string;
}

export interface Top5 {
  title: string;
  type?: string;
  items: Top5Item[];
}
