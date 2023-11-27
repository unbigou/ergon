import { IUser } from "../interfaces/IUserInterfaces";
import { createUUID } from "../utils/createUUID";

export class User{
    id: IUser['id'];
    name: IUser['name'];
    email: IUser['email'];
    userType: IUser['userType'];
    password: IUser['password'];
    phoneNumber: IUser['phoneNumber'];
    createdAt?: IUser['createdAt'];
    updatedAt?: IUser['updatedAt'];

    constructor(props: Omit<IUser, 'id'>, id?:string){
        this.id = id || createUUID();
        this.name = props.name;
        this.email = props.email;
        this.userType = props.userType;
        this.password = props.password;
        this.phoneNumber = props.phoneNumber || '';
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

        toJson(): IUser{
            return{
                id: this.id,
                name: this.name,
                email: this.email,
                password: this.password,
                userType: this.userType,
                phoneNumber: this.phoneNumber,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            }
        }
    }