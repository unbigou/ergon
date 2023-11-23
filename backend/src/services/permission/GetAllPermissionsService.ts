import { IPermission } from "../../interfaces/IPermission";
import { IPermissionRepository } from "../../interfaces/IPermissionRepository";

export class GetAllPermissionsService {
    constructor(private permRepo: IPermissionRepository) { }

    async execute(): Promise<IPermission[]> {
        return await this.permRepo.getAll()
    }
}