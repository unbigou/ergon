import { Request, Response, Router } from "express";
import { resolveController } from "../adapters/resolverController";
import { CreatePermissionController } from "./controllers/permission/CreatePermissionController";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { GetPermissionController } from "./controllers/permission/GetPermissionController";
import { GetAllPermissionsController } from "./controllers/permission/GetAllPermissionsController";

export const permRoute = Router();

let permRepo = new PermissionRepository();

let createPermController = new CreatePermissionController(permRepo);
let getPermController    = new GetPermissionController(permRepo);
let getAllPermController = new GetAllPermissionsController(permRepo);

permRoute.post('/', resolveController(async (req: Request, res: Response) => {
    return await createPermController.handle(req, res);
}))

permRoute.get('/:id', resolveController(async (req: Request, res: Response) => {
    return await getPermController.handle(req, res);
}))

permRoute.get('/', resolveController(async (req: Request, res: Response) => {
    return await getAllPermController.handle(req, res);
}))