import { IPermission } from "./IPermission";

export interface IPermissionRepository {
    insert(props: Omit<IPermission, "id">): Promise<IPermission>
    delete(id: string): Promise<void>
    get(id: string): Promise<IPermission>
    getAll(): Promise<IPermission[]>
    update(props: IPermission): Promise<void>
}