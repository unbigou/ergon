import { IProductRepository } from "../interfaces/IProductRepository";
import { IProduct } from "../interfaces/IProductInterface";

export class ListProductService{
    constructor(private productRepo: IProductRepository){}
        async execute(): Promise<IProduct[]>{
            const products = await this.productRepo.findAll()
            return products;
        }
    }