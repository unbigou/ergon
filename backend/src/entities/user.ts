import { IUser } from "../interfaces/IUserInterfaces";
import { createUUID } from "../utils/createUUID";

export class User{
    id:          IUser['id'];
    name:        IUser['name'];
    email:       IUser['email'];
    permissions: IUser['permissionId'];
    password:    IUser['password'];
    phoneNumber: IUser['phoneNumber'];
    cart: IUser['cart'];
    createdAt?: IUser['createdAt'];
    updatedAt?: IUser['updatedAt'];

    constructor(props: Omit<IUser, 'id'>, id?:string){
        this.id = id || createUUID();
        this.name = props.name;
        this.email = props.email;
        this.permissions = props.permissionId;
        this.password = props.password;
        this.phoneNumber = props.phoneNumber || '';
        this.cart = props.cart || [];
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

        toJson(): IUser{
            return{
                id: this.id,
                name: this.name,
                email: this.email,
                password: this.password,
                permissionId: this.permissions,
                phoneNumber: this.phoneNumber,
                cart: this.cart,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            }
        }
    }