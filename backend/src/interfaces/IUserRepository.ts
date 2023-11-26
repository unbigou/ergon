import { IUser } from "./IUserInterfaces"

export interface IUserRepository {
    findAll(): Promise<IUser[]>
    findOneUser(id:string): Promise<IUser>
    insert(props: IUser): Promise<IUser>
    update(props: IUser, id: string): Promise<void>
    delete(id: string): Promise<void>
    findByEmail(email: IUser["email"]): Promise<IUser | null>
    findByProduct(id: string): Promise<IUser[]>
}