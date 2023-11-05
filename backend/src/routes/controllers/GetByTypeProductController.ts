import { Request, Response } from "express";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { IProductGetByTypeRequest } from "../../interfaces/IProductInterface";
import { GetByTypeProductService } from "../../services/GetByTypeProductService";

export class GetByTypeProductController{
    constructor(private productRepo: IProductRepository){}
    async handle(req:Request, res: Response): Promise<Response>{
        const { type } = req.params;

        const getByTypeProductService = new GetByTypeProductService(this.productRepo)
        const result = await getByTypeProductService.execute({ type })

        return res.json(result)
    }
}