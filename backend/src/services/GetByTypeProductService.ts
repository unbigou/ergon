import { IProductRepository } from "../interfaces/IProductRepository";
import { IProduct, IProductGetByTypeRequest } from "../interfaces/IProductInterface";

export class GetByTypeProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({type}: IProductGetByTypeRequest): Promise<IProduct[]>{
        const result = await this.productRepo.findByType(type)
        return result
    }
}