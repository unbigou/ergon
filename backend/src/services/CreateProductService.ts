import { Product } from "../entities/product";
import { AppError } from "../errors/AppError";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IProductCreateRequest } from "../interfaces/IProductInterface";

export class CreateProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({name, price, type, photo, formulation, cultures, aplication, promotionPrice, newPrice}: IProductCreateRequest): Promise<void>{
        const product = new Product({name, price, type, photo, formulation, cultures, aplication, promotionPrice, newPrice})
        await this.productRepo.insert(product.toJson())
    }
}