import { NextFunction, Request, Response, Router } from "express";
import { IProduct } from "../interfaces/IProductInterface";
import { createUUID } from "../utils/createUUID";
import { Product } from "../entities/product";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetProductController } from "./controllers/GetProductController";
import { ListProductController } from "./controllers/ListProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { GetByTypeProductController } from "./controllers/GetByTypeProductController";
import { resolveController } from "../adapters/resolverController";
import { ProductRepository } from "../repositories/ProductRepository";

const products: IProduct[] = [];
export const productRoute = Router();

const productRepo = new ProductRepository()
const createProductController = new CreateProductController(productRepo)
const getProductController = new GetProductController(productRepo)
const listProductController = new ListProductController(productRepo)
const updateProductController = new UpdateProductController(productRepo)
const deleteProductController = new UpdateProductController(productRepo)
const getByTypeProductController = new GetByTypeProductController(productRepo)

productRoute.post('/', resolveController(async(req: Request, res: Response)=> {
    return await createProductController.handle(req,res)
}))

productRoute.get('/:id', resolveController(async(req: Request, res: Response)=> {
    return await getProductController.handle(req,res)
}))

productRoute.get('/:type', resolveController(async(req: Request, res: Response)=> {
    return await getByTypeProductController.handle(req,res)
}))

productRoute.get('/', resolveController(async(req: Request, res: Response)=> {
    return await listProductController.handle(req,res)
}))

productRoute.put('/', resolveController(async(req: Request, res: Response)=> {
    return await updateProductController.handle(req,res)
}))

productRoute.delete('/', resolveController(async(req: Request, res: Response)=> {
    return await deleteProductController.handle(req,res)
}))