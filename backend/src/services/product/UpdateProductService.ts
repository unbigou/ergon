import { Product } from "../../entities/product";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { IProductUpdateRequest } from "../../interfaces/IProductInterface";

export class UpdateProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({id, name, price, type, photo, formulation, cultures, aplication, promotionPrice, stock, sellerId}: IProductUpdateRequest): Promise<void>{
        const result = await this.productRepo.findOneProduct(id)
        console.log(result)

        const product = new Product({
            name: name || result.name,
            price: price || result.price,
            type: type || result.type,
            photo: photo || result.photo,
            formulation: formulation || result.formulation,
            cultures: cultures || result.cultures,
            aplication: aplication || result.aplication,
            sellerId: sellerId || result.sellerId,
            promotionPrice: promotionPrice,
            newPrice: result.newPrice,
            stock: stock || result.stock,
            rating: result.rating,
            ratingCont: result.ratingCont,
            ratingMax: result.ratingMax
        }, result.id)

        await this.productRepo.update(product.toJson(), id)
}}