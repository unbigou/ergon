import { Request, Response } from "express";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { IProduct } from "../../interfaces/IProductInterface";
import { UpdateProductService } from "../../services/UpdateProductService";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class UpdateProductController{
    constructor(private productRepo: IProductRepository, private userRepo: IUserRepository) {}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const {name, price, type, photo, formulation, cultures, aplication}: IProduct = req.body;

        const updateProductService = new UpdateProductService(this.productRepo, this.userRepo )
        await updateProductService.execute({id, name, price, type, photo, formulation, cultures, aplication})

        return res.status(201).json()
    }
}