import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { CreateReviewService } from "../../../services/review/CreateReviewService";

export class CreateReviewController{
    constructor(private reviewRepo: IReviewRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { comentary, rating, userId } = req.body;

        const createReviewService = new CreateReviewService(this.reviewRepo)
        await createReviewService.execute({ comentary, rating, userId})

        return res.status(200).json()
    }
}