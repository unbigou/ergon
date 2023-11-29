import { IProduct } from "../interfaces/IProductInterface";
import { createUUID } from "../utils/createUUID";

export class Product{
    id: IProduct['id'];
    name: IProduct['name'];
    price: IProduct['price'];
    promotionPrice: IProduct['promotionPrice'];
    newPrice: IProduct['newPrice'];
    type: IProduct['type'];
    photo: IProduct['photo'];
    formulation: IProduct['formulation'];
    cultures: IProduct['cultures'];
    aplication: IProduct['aplication'];
    rating: IProduct['rating'];
    ratingCont: IProduct['ratingCont'];
    ratingMax: IProduct['ratingMax'];
    reviewsId: IProduct['reviewsId'];
    stock: IProduct['stock']
    createdAt: IProduct['createdAt'];
    updatedAt: IProduct['updatedAt'];
    

    constructor(props: Omit<IProduct, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.price = props.price;
        this.promotionPrice = "1";
        this.newPrice = props.newPrice;
        this.type = props.type;
        this.photo = props.photo;
        this.formulation = props.formulation;
        this.cultures = props.cultures;
        this.aplication = props.aplication;
        this.rating = "0";
        this.ratingCont = "0";
        this.ratingMax = "0";
        this.reviewsId = props.reviewsId;
        this.stock = props.stock;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

        toJson(): IProduct{
            return{
                id: this.id,
                name: this.name,
                price: this.price,
                promotionPrice: this.promotionPrice,
                newPrice: this.newPrice,
                type: this.type,
                photo: this.photo,
                formulation: this.formulation,
                cultures: this.cultures,
                aplication: this.aplication,
                rating: this.rating,
                ratingCont: this.ratingCont,
                ratingMax: this.ratingMax,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                reviewsId: this.reviewsId,
                stock: this.stock
            }
        }
}