import {
  IReview,
  IReviewGetByProductRequest,
} from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";

export class GetReviewByProductService {
  constructor(private reviewRepo: IReviewRepository) {}
  async execute({ productId }: IReviewGetByProductRequest): Promise<IReview[]> {
    const reviews = await this.reviewRepo.findAllByProduct(productId);
    return reviews;
  }
}
