import { PrismaClient } from "@prisma/client";
import { IReviewRepository } from "../interfaces/IReviewRepository";
import { IReview } from "../interfaces/IReviewInterface";

const prisma = new PrismaClient();

export class ReviewRepository implements IReviewRepository{
    async findAll(userId: string): Promise<IReview[]> {
        const result = await prisma.review.findMany()
        return result;
    }
    
    async findOneInteraction(id: string): Promise<IReview> {
        const result = await prisma.review.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Review not found')
        return result
    }

    async insert(props: IReview): Promise<IReview> {
        const result = await prisma.review.create({
            data: props
        })

        return result
    }
    
    async update(props: IReview, id: string): Promise<IReview> {
        const result = await prisma.review.update({
            where: { id }, 
            data: props
        })

        return result
    }

    async delete(id: string): Promise<void> {
        await prisma.review.delete({
            where: { id }
    })
    }
    
}