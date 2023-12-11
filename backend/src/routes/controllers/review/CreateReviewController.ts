import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { CreateReviewService } from "../../../services/review/CreateReviewService";
import { IProductRepository } from "../../../interfaces/IProductRepository";

export class CreateReviewController{
    constructor(private reviewRepo: IReviewRepository, private productRepo: IProductRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { comentary, rating, userId, productId } = req.body;

        const createReviewService = new CreateReviewService(this.reviewRepo, this.productRepo)
        await createReviewService.execute({ comentary, rating, userId, productId})

        return res.status(200).json()
    }
}