import { Product } from "../../entities/product";
import { Review } from "../../entities/review";
import { IProductRepository } from "../../interfaces/IProductRepository";
import {
  IReview,
  IReviewCreateRequest,
} from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";
import { ratingCalc } from "../../utils/ratingCalc";
import { ratingMaxCalc } from "../../utils/ratingMaxCalc";
import { ratingContCalc } from "../../utils/retingContCalc";

export class CreateReviewService {
  constructor(
    private reviewRepo: IReviewRepository,
    private productRepo: IProductRepository
  ) {}
  async execute({
    rating,
    comentary,
    userId,
    productId,
  }: IReviewCreateRequest): Promise<IReview> {
    const review = new Review({ rating, comentary, userId, productId });
    const result = await this.reviewRepo.insert(review.toJson());

    const prod = await this.productRepo.findOneProduct(productId);

    const newRatingCont = ratingContCalc(prod.ratingCont || "0");
    const newRatingMax = ratingMaxCalc(prod.ratingMax || "0", rating);
    const newRating = ratingCalc(newRatingCont, newRatingMax)

    const product = new Product(
      {
        name: prod.name,
        price: prod.price,
        type: prod.price,
        photo: prod.photo,
        formulation: prod.formulation,
        cultures: prod.cultures,
        aplication: prod.aplication,
        promotionPrice: prod.promotionPrice,
        sellerId: prod.sellerId,
        newPrice: prod.newPrice,
        rating: newRating || "0",
        ratingCont: newRatingCont,
        ratingMax: newRatingMax,
        stock: prod.stock,
      },
      productId
    );

    console.log(product.toJson());

    await this.productRepo.update(product.toJson(), productId);

    return result;
  }
}
