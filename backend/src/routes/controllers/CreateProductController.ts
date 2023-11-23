import { Request, Response } from "express";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { CreateProductService } from "../../services/CreateProductService";

export class CreateProductController{
    constructor(private productRepo: IProductRepository){    }
    async handle(req: Request, res: Response): Promise<Response>{
        const {name, price, type, photo, formulation, cultures, aplication, promotionPrice, newPrice } = req.body;

        const createProductService = new CreateProductService(this.productRepo)
        await createProductService.execute({name, price, type, photo, formulation, cultures, aplication, promotionPrice, newPrice})

        return res.status(200).json({})
    }
}