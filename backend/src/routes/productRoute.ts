import { Request, Response, Router } from "express";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { GetProductController } from "./controllers/product/GetProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { GetByTypeProductController } from "./controllers/product/GetByTypeProductController";
import { resolveController } from "../adapters/resolverController";
import { ProductRepository } from "../repositories/ProductRepository";

export const productRoute = Router();

const productRepo = new ProductRepository()
const createProductController = new CreateProductController(productRepo)
const getProductController = new GetProductController(productRepo)
const listProductController = new ListProductController(productRepo)
const updateProductController = new UpdateProductController(productRepo)
const deleteProductController = new DeleteProductController(productRepo)
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

productRoute.put('/:id', resolveController(async(req: Request, res: Response)=> {
    return await updateProductController.handle(req,res)
}))

productRoute.delete('/:id', resolveController(async(req: Request, res: Response)=> {
    return await deleteProductController.handle(req,res)
}))