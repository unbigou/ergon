import { IProduct } from "./IProductInterface";

export interface IProductRepository {
    findAll(): Promise<IProduct[]>
    findOneProduct(id:string): Promise<IProduct>
    insert(props: IProduct): Promise<void>
    update(props: IProduct, id: string): Promise<void>
    delete(id: string): Promise<void>
}