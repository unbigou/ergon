import { Review } from "../../entities/review";
import { IReview, IReviewCreateRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class CreateReviewService{
    constructor(private reviewRepo: IReviewRepository){}
    async execute({rating, comentary, userId}: IReviewCreateRequest): Promise<IReview>{
        const review = new Review({ rating, comentary, userId })
        const result = await this.reviewRepo.insert(review.toJson())

        return result;
    }
}