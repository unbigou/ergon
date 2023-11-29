export interface IProduct {
    id: string;
    name: string;
    price: string;
    promotionPrice: string;
    newPrice: string;
    type: string;
    photo: string[];
    formulation: string;
    cultures: string[];
    aplication: string;
    reviewsId?: string[];
    stock: boolean;
    rating?: string;
    ratingCont?: string;
    ratingMax?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IProductCreateRequest{
    name: string;
    price: string;
    promotionPrice: string;
    newPrice: string;
    type: string;
    photo: string[];
    formulation: string;
    cultures: string[];
    aplication: string;
    stock: boolean;
}

export interface IProductGetRequest{
    id: string;
}

export interface IProductUpdateRequest{
    id: string;
    name: string;
    price: string;
    promotionPrice: string;
    type: string;
    photo: string[];
    formulation: string;
    cultures: string[];
    aplication: string;
    stock: boolean;
}

export interface IProductDeleteRequest{
    id:string;
}

export interface IProductGetByTypeRequest{
    type: string;
}