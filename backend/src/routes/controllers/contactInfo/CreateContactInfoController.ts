import { IContactInfoRepository } from "../../../interfaces/IContactInfoRepository";
import { Request, Response } from "express";
import { CreateContactInfoService } from "../../../services/contactInfo/CreateContactInfoService";

export class CreateContactInfoController{
    constructor(private contactInfo: IContactInfoRepository){}

    async handle(req: Request, res:Response): Promise<Response>{
        const { email, phoneNumber, address} = req.body;
        const createContactInfoService = new CreateContactInfoService(this.contactInfo)
        createContactInfoService.execute({ email, phoneNumber, address})

        return res.status(201).send()
    }
}