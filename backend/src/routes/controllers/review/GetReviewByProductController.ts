import { Request, Response } from "express";
import { IReviewRepository } from "../../../interfaces/IReviewRepository";
import { GetReviewByProductService } from "../../../services/review/GetReviewByProductService";

export class GetReviewByProductController {
  constructor(private reviewRepo: IReviewRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    const getReviewByProductSerivce = new GetReviewByProductService(
      this.reviewRepo
    );
    const result = await getReviewByProductSerivce.execute({ productId });

    return res.status(200).json(result);
  }
}
