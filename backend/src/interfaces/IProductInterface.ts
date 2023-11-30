export interface IProduct {
    id: string;
    name: string;
    price: string;
    type: string;
    photo: string[];
    formulation: string;
    cultures: string[];
    aplication: string;
    sellerId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IProductCreateRequest{
    name: string;
    price: string;
    type: string;
    photo: string[];
    formulation: string;
    sellerId: string;
    cultures: string[];
    aplication: string;
}

export interface IProductGetRequest{
    id: string;
}

export interface IProductUpdateRequest{
    id: string;
    name: string;
    price: string;
    type: string;
    photo: string[];
    formulation: string;
    cultures: string[];
    aplication: string;
    sellerId: string;
}

export interface IProductDeleteRequest{
    id:string;
}

export interface IProductGetByTypeRequest{
    type: string;
}