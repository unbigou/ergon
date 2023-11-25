import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { IReview } from "../../../interfaces/IReviewInterface";
import { UpdatedReviewService } from "../../../services/review/UpdateReviewService";

export class UpdateReviewController{
    constructor(private reviewRepo: IReviewRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { id } = req.params;
        const { comentary, rating, userId }: IReview = req.body;

        const updateReviewService = new UpdatedReviewService(this.reviewRepo)
        await updateReviewService.execute({id, comentary, rating})

        return res.status(201).json()
    }
}