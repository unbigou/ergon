import { NextFunction, Request, Response, Router, response } from "express";
import { ReviewRepository } from "../repositories/ReviewRepository";
import { CreateReviewController } from "./controllers/review/CreateReviewController";
import { DeleteReviewController } from "./controllers/review/DeleteReviewController";
import { GetReviewByUserController } from "./controllers/review/GetReviewByUserController";
import { GetReviewController } from "./controllers/review/GetReviewService";
import { UpdateReviewController } from "./controllers/review/updateReviewController";
import { resolveController } from "../adapters/resolverController";
import { ProductRepository } from "../repositories/ProductRepository";

export const reviewRoute = Router()

const reviewRepo = new ReviewRepository();
const productRepo = new ProductRepository();
const createReviewController = new CreateReviewController(reviewRepo, productRepo)
const deleteReviewController = new DeleteReviewController(reviewRepo)
const getReviewByUserController = new GetReviewByUserController(reviewRepo)
const getReviewController = new GetReviewController(reviewRepo)
const updateReviewController = new UpdateReviewController(reviewRepo, productRepo)

reviewRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createReviewController.handle(req,res)
}))

reviewRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getReviewController.handle(req,res)
}))

reviewRoute.get('/:userId', resolveController(async(_: Request, res: Response) => {
    return await getReviewByUserController.handle(_,res)
}))

reviewRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updateReviewController.handle(req,res)
}))

reviewRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deleteReviewController.handle(req,res)
}))
