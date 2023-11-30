import { IReview, IReviewGetByUserRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class GetReviewByUserService{
    constructor(private reviewRepo: IReviewRepository){}
    async execute({userId}: IReviewGetByUserRequest): Promise<IReview[]>{
        const reviews = await this.reviewRepo.findAll(userId)
        return reviews;
    }
}