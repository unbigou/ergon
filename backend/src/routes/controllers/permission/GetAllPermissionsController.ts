import { Request, Response } from "express";
import { IPermissionRepository } from "../../../interfaces/IPermissionRepository";
import { GetAllPermissionsService } from "../../../services/permission/GetAllPermissionsService";

export class GetAllPermissionsController {
    constructor(private permRepo: IPermissionRepository) { }

    async handle(_: Request, res: Response): Promise<Response> {
        let getAllPerm = new GetAllPermissionsService(this.permRepo);
        let result = await getAllPerm.execute();

        return res.status(200).json(result);
    }
}