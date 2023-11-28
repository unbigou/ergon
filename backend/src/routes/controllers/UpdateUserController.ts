import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser } from "../../interfaces/IUserInterfaces";
import { validateEmail, validatePassword, validatePhoneNumber } from "../../utils/validate";
import { User } from "../../entities/user";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } =req.params;
    const {name, email, password, permissionId, phoneNumber }: IUser = req.body;

    const updateUserService = new UpdateUserService(this.userRepo)
    await updateUserService.execute({
        id, 
        name, 
        email, 
        password,
        permissionId, 
        phoneNumber,
    })

    return res.status(201).json()

    }
}

