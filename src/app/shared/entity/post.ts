

export interface Post {
    id?: number;
    postTitle?: string;
    postDescription?: string;
    postType?: string;  // shared , post
    postTime?: string;
    like_number?: number;
    comment_number?: number;
    share_number?: number;
    likeUserList?: Comment[];
    commentList?: Comment[];
    shareUserList?: Comment[];
    userId?: number;
    userName?: string;
    productId?: number;
    productList?: any[];
}

export interface Comment {
    id?: number;
    body?: string;
    time?: string;
}
