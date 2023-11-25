import { IReview, IReviewGetRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class GetReviewService{
    constructor(private reviewRepo: IReviewRepository){}
    async execute({id}: IReviewGetRequest): Promise<IReview>{
        const result = await this.reviewRepo.findOneInteraction(id)
        return result
    }
}