import { Product } from "../../entities/product";
import { Review } from "../../entities/review";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { IReview, IReviewUpdateRequest } from "../../interfaces/IReviewInterface";
import { IReviewRepository } from "../../interfaces/IReviewRepository";
import { ratingCalc } from "../../utils/ratingCalc";
import { ratingMaxCalc } from "../../utils/ratingMaxCalc";
import { ratingContCalc } from "../../utils/retingContCalc";

export class UpdatedReviewService{
    constructor(private reviewRepo: IReviewRepository, private productRepo: IProductRepository){}
    async execute({ comentary, rating, id, productId}: IReviewUpdateRequest): Promise<IReview>{
        const result = await this.reviewRepo.findOneInteraction(id)

        const review = new Review({
            comentary: comentary || result.comentary,
            rating: rating || result.rating,
            userId: result.userId,
            productId: result.productId
        })

        await this.reviewRepo.update(review.toJson(), id)

        const prod = await this.productRepo.findOneProduct(productId)

        const product = new Product({
            name: prod.name,
            price: prod.price,
            type: prod.price,
            photo:prod.photo,
            formulation: prod.formulation,
            cultures: prod.cultures,
            aplication: prod.aplication,
            promotionPrice: prod.promotionPrice,
            newPrice: prod.newPrice,
            ratingCont: ratingContCalc(prod.ratingCont || "0"),
            ratingMax: ratingMaxCalc(prod.ratingMax || "0", rating),
            rating: ratingCalc(prod.ratingCont || "0", prod.ratingMax || "0"),
            stock: prod.stock
        }, result.id)

        await this.productRepo.update(product.toJson(), productId)

        return review
    }
    }
