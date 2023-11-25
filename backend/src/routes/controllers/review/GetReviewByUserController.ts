import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { GetReviewByUserService } from "../../../services/review/GetReviewByUserService";

export class CreateReviewController{
    constructor(private reviewRepo: IReviewRepository){}
    async handle(req: Request, res: Response):Promise<Response>{
       const { userId } = req.params;
       const getReviewByUserService = new GetReviewByUserService(this.reviewRepo) 
       const result = await getReviewByUserService.execute({ userId })

       return res.status(200).json(result)
    }
}