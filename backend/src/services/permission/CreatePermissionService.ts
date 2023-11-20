import { IPermission } from "../../interfaces/IPermission";
import { IPermissionRepository } from "../../interfaces/IPermissionRepository";

export class CreatePermissionService {
    constructor(private permRepo: IPermissionRepository) { }

    async execute(props: IPermission): Promise<IPermission> {
        await this.permRepo.insert(props);

        return props
    }
}