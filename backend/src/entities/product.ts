import { IProduct } from "../interfaces/IProductInterface";
import { createUUID } from "../utils/createUUID";
import { promotionCalc } from "../utils/promotion";

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
    sellerId: IProduct['sellerId'];
    rating: IProduct['rating'];
    ratingCont: IProduct['ratingCont'];
    ratingMax: IProduct['ratingMax'];
    stock: IProduct['stock']
    createdAt: IProduct['createdAt'];
    updatedAt: IProduct['updatedAt'];
    

    constructor(props: Omit<IProduct, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.price = props.price;
        this.promotionPrice = props.promotionPrice;
        this.newPrice = promotionCalc(this.price, this.promotionPrice);
        this.type = props.type;
        this.photo = props.photo;
        this.formulation = props.formulation;
        this.cultures = props.cultures;
        this.sellerId = props.sellerId;
        this.aplication = props.aplication;
        this.rating = props.rating;
        this.ratingCont = props.ratingCont || "0";
        this.ratingMax = props.ratingMax || "0";
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
                sellerId: this.sellerId,
                rating: this.rating,
                ratingCont: this.ratingCont,
                ratingMax: this.ratingMax,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                stock: this.stock
            }
        }
}