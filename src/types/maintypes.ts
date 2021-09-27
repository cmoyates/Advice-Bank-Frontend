export interface User {
    user_id: number;
    user_email: string;
    user_name: string;
    user_img: string;
    is_admin: boolean;
    saved: Array<number>;
};

export interface Post {
    post_id: number;
    user_id: number;
    user_name: string;
    user_img: string;
    title: string;
    content: string;
    tags: Array<string>;
    ts: any;
};