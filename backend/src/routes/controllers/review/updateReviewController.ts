import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { IReview } from "../../../interfaces/IReviewInterface";
import { UpdatedReviewService } from "../../../services/review/UpdateReviewService";
import { IProductRepository } from "../../../interfaces/IProductRepository";

export class UpdateReviewController{
    constructor(private reviewRepo: IReviewRepository, private productRepo: IProductRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { id } = req.params;
        const { comentary, rating, userId, productId }: IReview = req.body;

        const updateReviewService = new UpdatedReviewService(this.reviewRepo, this.productRepo)
        await updateReviewService.execute({id, comentary, rating, productId})

        return res.status(201).json()
    }
}