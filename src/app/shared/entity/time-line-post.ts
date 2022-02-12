
export interface TimeLinePost {
    id?: number;
    postTitle?: string;
    postDescription?: string;

    postType?: string;  // shared , post
    createdAt?: string;

    totalReaction?: number;
    totalComment?: number;
    totalShare?: number;

    likeUserList?: Comment[];
    commentList?: Comment[];
    shareUserList?: Comment[];

    userId?: number;
    userName?: string;
}

export interface Comment {
    id?: number;
    body?: string;
    time?: string;
}
