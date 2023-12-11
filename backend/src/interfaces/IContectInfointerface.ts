export interface IContactInfo{
    id: string;
    email: string;
    address: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IContactInfoCreateRequest{
    email: string;
    address: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IContactInfoUpdateRequest{
    id: string;
    email: string;
    address: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IContactInfoGetRequest{
    id:string;
}

export interface IContactInfoDeleteRequest{
    id: string;
}