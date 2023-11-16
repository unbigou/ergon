export interface IProduct {
    id: string;
    name: string;
    price: string;
    type: string;
    photo: string;
    formulation: string;
    cultures: string[];
    aplication: string;
    rating: number;
    ratingCont: number;
    ratingMax: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IProductCreateRequest{
    name: string;
    price: string;
    type: string;
    photo: string;
    formulation: string;
    cultures: string[];
    aplication: string;
    rating: number;
    ratingCont: number;
    ratingMax: number;
}

export interface IProductGetRequest{
    id: string;
}

export interface IProductUpdateRequest{
    id: string;
    name: string;
    price: string;
    type: string;
    photo: string;
    formulation: string;
    cultures: string[];
    aplication: string;
    rating: number;
    ratingCont: number;
    ratingMax: number;
}

export interface IProductDeleteRequest{
    id:string;
}

export interface IProductGetByTypeRequest{
    type: string;
}