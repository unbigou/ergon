import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { DeleteReviewService } from "../../../services/review/DeleteReviewService";

export class CreateReviewController{
    constructor(private reviewRepo: IReviewRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { id } = req.params;

        const deleteReviewService = new DeleteReviewService(this.reviewRepo)
        await deleteReviewService.execute({ id })

        return res.status(200)
    }
}