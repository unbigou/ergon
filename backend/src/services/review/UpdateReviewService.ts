import { Review } from "../../entities/review";
import { IReview, IReviewUpdateRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class UpdatedReviewService{
    constructor(private reviewRepo: IReviewRepository){}
    async execute({ comentary, rating, id}: IReviewUpdateRequest): Promise<IReview>{
        const result = await this.reviewRepo.findOneInteraction(id)

        const review = new Review({
            comentary: comentary || result.comentary,
            rating: rating || result.rating,
            userId: result.userId
        })

        await this.reviewRepo.update(review.toJson(), id)

        return review
    }
    }
