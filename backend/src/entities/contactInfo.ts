import { IContactInfo } from "../interfaces/IContectInfointerface";
import { createUUID } from "../utils/createUUID";

export class ContactInfo{
    id:IContactInfo['id'];
    email:IContactInfo['email'];
    phoneNumber: IContactInfo['phoneNumber'];
    address:IContactInfo['address'];
    createdAt?: IContactInfo['createdAt'];
    updatedAt?: IContactInfo['updatedAt'];

    constructor(props: Omit<IContactInfo, 'id'>, id?:string){
        this.id = id || createUUID();
        this.email = props.email;
        this.phoneNumber = props.phoneNumber || '';
        this.address = props.address;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

        toJson(): IContactInfo{
            return{
                id: this.id,
                email: this.email,
                phoneNumber: this.phoneNumber,
                address: this.address,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            }
        }
    }