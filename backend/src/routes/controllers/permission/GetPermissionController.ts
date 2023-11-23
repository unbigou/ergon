import { Request, Response } from "express";
import { IPermissionRepository } from "../../../interfaces/IPermissionRepository";
import { GetPermissionService } from "../../../services/permission/GetPermissionService";

export class GetPermissionController {
    constructor(private permRepo: IPermissionRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let { id } = req.params;

        let getPerm = new GetPermissionService(this.permRepo);
        let result = await getPerm.execute(id);

        return res.status(200).json(result)
    }
}