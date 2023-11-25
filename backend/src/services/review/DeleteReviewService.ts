import { IReviewDeleteRequest, IReviewGetRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class DeleteReviewService{
    constructor(private reviewRepo: IReviewRepository){}
    async execute({id}: IReviewDeleteRequest): Promise<void>{
        await this.reviewRepo.findOneInteraction(id)
        await this.reviewRepo.delete(id)
    }
}