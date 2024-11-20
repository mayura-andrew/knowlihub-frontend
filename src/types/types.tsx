export interface Resource {
    id: string;
    title: string;
    description: string;
    url?: string;
    author : {
        id?: string;
        name: string;
        avatar: string;
        level: number;
        position: string;
    };
    likes: number;
    comments: number;
    rating: number;
    tags: string[];
    category: string;
    saves?: number;
}
