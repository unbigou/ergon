import { IProduct } from "../interfaces/IProductInterface";
import { createUUID } from "../utils/createUUID";

export class Product{
    id: IProduct['id'];
    name: IProduct['name'];
    price: IProduct['price'];
    type: IProduct['type'];
    photo: IProduct['photo'];
    formulation: IProduct['formulation'];
    cultures: IProduct['cultures'];
    aplication: IProduct['aplication'];
    rating: IProduct['rating'];
    ratingCont: IProduct['ratingCont'];
    ratingMax: IProduct['ratingMax'];
    createdAt: IProduct['createdAt'];
    updatedAt: IProduct['updatedAt'];

    constructor(props: Omit<IProduct, 'id'>, id?: string){
        this.id = id || createUUID();
        this.name = props.name;
        this.price = props.name;
        this.type = props.type;
        this.photo = props.photo;
        this.formulation = props.formulation;
        this.cultures = props.cultures;
        this.aplication = props.aplication;
        this.rating = props.rating;
        this.ratingCont = props.ratingCont;
        this.ratingMax = props.ratingMax;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

        toJson(): IProduct{
            return{
                id: this.id,
                name: this.name,
                price: this.price,
                type: this.type,
                photo: this.photo,
                formulation: this.formulation,
                cultures: this.cultures,
                aplication: this.aplication,
                rating: this.rating,
                ratingCont: this.ratingCont,
                ratingMax: this.ratingMax,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            }
        }
}