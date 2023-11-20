import { IPermission } from "../../interfaces/IPermission";
import { IPermissionRepository } from "../../interfaces/IPermissionRepository";

export class GetPermissionService {
    constructor(private permRepo: IPermissionRepository) { }

    async execute(id: string): Promise<IPermission> {
        return await this.permRepo.get(id);
    }
}