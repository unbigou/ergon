import { IReview } from "./IReviewInterface"

export interface IReviewRepository{
    findAll(userId: string): Promise<IReview[]>
    findAllByProduct(productId: string): Promise<IReview[]>
    findAllByUser(userId: string): Promise<IReview[]>
    findOneInteraction(id: string): Promise<IReview>
    insert(props: IReview): Promise<IReview>
    update(props: IReview, id: string): Promise<IReview>
    delete(id: string): Promise<void>
}