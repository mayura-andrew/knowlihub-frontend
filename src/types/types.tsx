export interface CommentProps {
  author: string;
  text: string;
  avatar: string;
  date: string;
  replies?: CommentProps[];
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  date: string;
  replies?: Comment[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  imageUrl?: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    level: number;
    position: string;
  };
  likes: number;
  comments: Comment[];
  rating: number;
  tags: string[];
  category: string;
  saves?: number;
}
