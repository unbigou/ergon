import { Product } from "../entities/product";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IProductUpdateRequest } from "../interfaces/IProductInterface";
import { NotificationService } from "./NotificationService";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UpdateProductService{
    constructor(private productRepo: IProductRepository, private userRepo: IUserRepository) {}

    async execute({id, name, price, type, photo, formulation, cultures, aplication}: IProductUpdateRequest): Promise<void>{
        const result = await this.productRepo.findOneProduct(id)

        if(price && price < result.price) {
            let notificate = new NotificationService(this.userRepo, this.productRepo);
            await notificate.execute(id)
        }

        const product = new Product({
            name: name || result.name,
            price: price || result.price,
            type: type || result.type,
            photo: photo || result.photo,
            formulation: formulation || result.formulation,
            cultures: cultures || result.cultures,
            aplication: aplication || result.aplication
        }, result.id)

        await this.productRepo.update(product.toJson(), id)
}}