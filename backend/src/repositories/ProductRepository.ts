import { IProductRepository } from "../interfaces/IProductRepository";
import { IProduct } from "../interfaces/IProductInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductRepository implements IProductRepository{
    async findAll(): Promise<IProduct[]> {
        const result = await prisma.product.findMany()
        return result;
    }
    
    async findOneProduct(id: string): Promise<IProduct> {
        const result = await prisma.product.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Playlist not found')
        return result
    }

    async insert(props: IProduct): Promise<void> {
        await prisma.product.create({
            data: props})
    }

    async update(props: IProduct, id: string): Promise<void> {
        await prisma.product.update({
            where: { id }, 
            data: props
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: { id }
        })
    }
    async findByType(type: string): Promise<IProduct[]> {
        const result = await prisma.product.findMany({
            where: {type}
        })

        if(!result) throw new Error('Product not found')
        return result
    }
    
}