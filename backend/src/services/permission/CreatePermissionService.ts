import { IPermission } from "../../interfaces/IPermission";
import { IPermissionRepository } from "../../interfaces/IPermissionRepository";

export class CreatePermissionService {
    constructor(private permRepo: IPermissionRepository) { }

    async execute(props: Omit<IPermission, 'id'>): Promise<IPermission> {
        let result = await this.permRepo.insert(props);
        return result
    }
}