import { Request, Response } from "express";
import { IPermissionRepository } from "../../../interfaces/IPermissionRepository";
import { CreatePermissionService } from "../../../services/permission/CreatePermissionService";

export class CreatePermissionController {
    constructor(private permRepo: IPermissionRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let props = req.body;

        let createPerm = new CreatePermissionService(this.permRepo);
        let result = await createPerm.execute(props);

        return res.status(201).json(result)
    }
}