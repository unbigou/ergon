import { Request, Response } from "express";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { IProduct } from "../../../interfaces/IProductInterface";
import { UpdateProductService } from "../../../services/product/UpdateProductService";

export class UpdateProductController {
  constructor(private productRepo: IProductRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      name,
      price,
      type,
      photo,
      formulation,
      cultures,
      aplication,
      promotionPrice,
      stock,
      sellerId,
    }: IProduct = req.body;

    const updateProductService = new UpdateProductService(this.productRepo);
    await updateProductService.execute({
      id,
      name,
      price,
      type,
      photo,
      formulation,
      cultures,
      aplication,
      promotionPrice,
      stock,
      sellerId,
    });

    return res.status(201).json();
  }
}
