export interface IUser {
    id: string;
    name: string;
    email: string;
    confirmEmail?: string;
    password: string;
    confirmPassword?: string;
    cpf: string;
    phoneNumber: string;
    gender: string;
    birthDate: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserCreateRequest {
    name: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    phoneNumber: string;
    gender: string;
    birthDate: Date;
}

export interface IUserGetRequest{
    id: string
}

export interface IUserUpdateRequest{
    id: string
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    gender: string;
    birthDate: Date;
}

export interface IUserDeleteRequest{
    id: string
}

export interface IUserAuthenticateRequest {
    email    : string;
    password : string;
}

export interface IUserChangePasswordRequest {
    id: string;
    oldPassword: string;
    newPassword: string;
}

export interface IUserChangePasswordResponse extends IUser { } 
