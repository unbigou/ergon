import { Request, Response, Router } from "express";
import { resolveController } from "../adapters/resolverController";
import { NotificationService } from "../services/NotificationService";
import { UserRepository } from "../repositories/UserRepository";
import { CryptoRepository } from "../repositories/CryptoRepository";
import { ProductRepository } from "../repositories/ProductRepository";

export const notificationRoute = Router();

notificationRoute.post('/', resolveController(async (_:Request, __:Response) => {
    const service = new NotificationService(new UserRepository(new CryptoRepository()), new ProductRepository());
    return await service.execute('');
    
}))