import { Product } from "../entities/product";
import { AppError } from "../errors/AppError";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IProductCreateRequest } from "../interfaces/IProductInterface";

export class CreateProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({name, price, type, photo, formulation, cultures, aplication, promotionPrice, stock}: IProductCreateRequest): Promise<void>{
        const rating = "0";
        const ratingCont = "0"
        const ratingMax = "0"
        const newPrice = price
        const product = new Product({name, price, type, photo, formulation, cultures, aplication, promotionPrice, newPrice, stock, rating, ratingCont, ratingMax})
        await this.productRepo.insert(product.toJson())
    }
}