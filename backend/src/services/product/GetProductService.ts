import { IProductRepository } from "../../interfaces/IProductRepository";
import { IProduct, IProductGetRequest } from "../../interfaces/IProductInterface";

export class GetProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({id}: IProductGetRequest): Promise<IProduct>{
        const result = await this.productRepo.findOneProduct(id)
        return result;
    }
}