import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser } from "../../interfaces/IUserInterfaces";
import { validateEmail, validatePassword, validatePhoneNumber } from "../../utils/validate";
import { User } from "../../entities/user";
import { UpdateUserService } from "../../services/UpdateUserService";

export class UpdateUserController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } =req.params;
    const {name, email, password, userType, phoneNumber }: IUser = req.body;

    const updateUserService = new UpdateUserService(this.userRepo)
    await updateUserService.execute({
        id, 
        name, 
        email, 
        password,
        userType, 
        phoneNumber,
    })

    return res.status(201).json()

    }
}

