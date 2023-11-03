import { Request, Response } from "express";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { DeleteProductService } from "../../services/DeleteProductService";

export class DeleteProductController{
    constructor(private productRepo: IProductRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteProductService = new DeleteProductService(this.productRepo)
        await deleteProductService.execute({ id })
        
        return res.status(200)
    }
}