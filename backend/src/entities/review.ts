import { IReview } from "../interfaces/IReviewInterface";
import { createUUID } from "../utils/createUUID";

export class Review{
    id: IReview['id'];
    rating: IReview['rating'];
    comentary: IReview['comentary'];
    userId: IReview['userId'];
    productId: IReview['productId']
    createdAt: IReview['createdAt'];
    updatedAt: IReview['updatedAt'];

    constructor(props: Omit<IReview, 'id'>, id?:string){
        this.id = id || createUUID();
        this.rating = props.rating;
        this.comentary = props.comentary;
        this.userId = props.userId;
        this.productId = props.productId;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IReview{
        return{
            id: this.id,
            comentary: this.comentary,
            rating: this.rating,
            userId: this.userId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            productId: this.productId
        }
    }
}