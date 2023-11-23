import { IProductRepository } from "../../interfaces/IProductRepository";
import { IProduct, IProductGetRequest } from "../../interfaces/IProductInterface";

export class DeleteProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({id}: IProductGetRequest): Promise<void>{
        await this.productRepo.findOneProduct(id)
        await this.productRepo.delete(id)
    }
}