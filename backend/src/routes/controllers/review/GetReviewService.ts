import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { GetReviewService } from "../../../services/review/GetReviewService";

export class CreateReviewController{
    constructor(private reviewRepo: IReviewRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { id } = req.params;
        const getReviewSerivce = new GetReviewService(this.reviewRepo)
        await getReviewSerivce.execute({id})

        return res.status(201).send()
    }
}