export interface IReview{
    id: string;
    rating: string;
    comentary: string;
    userId: string;
    productId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IReviewCreateRequest{
    rating: string;
    comentary: string;
    userId: string;
    productId: string;
}

export interface IReviewGetRequest{
    id: string;
}

export interface IReviewGetByUserRequest{
    userId: string;
}

export interface IReviewGetByProductRequest{
    productId: string;
}

export interface IReviewDeleteRequest{
    id: string;
}

export interface IReviewUpdateRequest{
    id: string;
    comentary: string;
    rating: string;
    productId: string;
}