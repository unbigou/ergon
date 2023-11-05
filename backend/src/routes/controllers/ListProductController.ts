import { Request, Response } from "express";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { ListProductService } from "../../services/ListProductService";

export class ListProductController{
    constructor(private productRepo: IProductRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const listProductService = new ListProductService(this.productRepo)
        const products = await listProductService.execute()

        return res.json(products)
    }
}